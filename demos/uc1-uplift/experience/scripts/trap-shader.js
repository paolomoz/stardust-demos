/* trap-shader.js — minimal WebGL fragment shader for Beat 1 trap atmosphere.
   Procedural value-noise + slow red drift behind the asymmetric composition.
   Initialises on demand and animates via rAF.
*/

(function (global) {
  'use strict';

  const VS = `
    attribute vec2 a_position;
    void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
  `;

  const FS = `
    precision mediump float;
    uniform vec2  u_resolution;
    uniform float u_time;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    float vnoise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    float fbm(vec2 p) {
      float v = 0.0, amp = 0.5;
      for (int i = 0; i < 5; i++) {
        v += amp * vnoise(p);
        p *= 2.02;
        amp *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = st * 3.4;
      p.x += u_time * 0.020;
      p.y -= u_time * 0.012;
      float n = fbm(p);
      // Subtle red wash, brightest where the dominant zone sits (left)
      float bias = smoothstep(1.05, 0.0, st.x); // brighter on left
      float grain = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.025;
      vec3 col = vec3(0.045, 0.0, 0.0)
               + vec3(n * 0.085, n * 0.012, n * 0.010) * (0.65 + 0.35 * bias)
               + vec3(grain * 1.0, grain * 0.5, grain * 0.5);
      // Vignette at edges
      float vig = smoothstep(1.3, 0.4, length(st - vec2(0.5)));
      col *= 0.55 + 0.45 * vig;
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('trap-shader compile failed:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  function init(canvas) {
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false, alpha: true });
    if (!gl) { console.warn('trap-shader: no WebGL'); return null; }
    const vs = compile(gl, gl.VERTEX_SHADER, VS);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('trap-shader link failed:', gl.getProgramInfoLog(prog));
      return null;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1, -1,  1, -1,  -1, 1,   -1, 1,  1, -1,  1, 1]),
      gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uT   = gl.getUniformLocation(prog, 'u_time');

    let raf = 0;
    let running = false;
    let start = 0;

    function resize() {
      const w = canvas.clientWidth | 0;
      const h = canvas.clientHeight | 0;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const cw = (w * dpr) | 0, ch = (h * dpr) | 0;
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw; canvas.height = ch;
        gl.viewport(0, 0, cw, ch);
      }
      gl.uniform2f(uRes, cw, ch);
    }
    window.addEventListener('resize', resize);
    resize();

    function frame(t) {
      if (!running) return;
      if (!start) start = t;
      gl.uniform1f(uT, (t - start) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(frame);
    }

    return {
      play() { if (running) return; running = true; resize(); raf = requestAnimationFrame(frame); },
      pause() { running = false; cancelAnimationFrame(raf); },
    };
  }

  global.TrapShader = { init };
})(window);
