"use client";

import { useEffect, useRef } from "react";

const NUM_DOTS = 100;
const MAX_RADIUS = 2;
const INTERACTION_RADIUS = 150; // px
const SPEED_BOOST = 16; // multiplier when near cursor

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function DotBackground() {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999, lastX: null, lastY: null, vx: 0, vy: 0 });
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // initialize dots
    dotsRef.current = Array.from({ length: NUM_DOTS }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: randomBetween(-0.2, 0.2),
      vy: randomBetween(-0.2, 0.2),
      radius: randomBetween(1, MAX_RADIUS),
    }));

    let rafId;
    let lastTime = performance.now();

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.resetTransform();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      // clamp existing dots inside
      dotsRef.current.forEach((d) => {
        if (d.x > width) d.x = Math.random() * width;
        if (d.y > height) d.y = Math.random() * height;
      });
    };

    window.addEventListener("resize", resize);

    const updatePointerVelocity = (x, y) => {
      if (pointer.current.lastX !== null) {
        pointer.current.vx = x - pointer.current.lastX;
        pointer.current.vy = y - pointer.current.lastY;
      }
      pointer.current.lastX = x;
      pointer.current.lastY = y;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.current.x = x;
      pointer.current.y = y;
      updatePointerVelocity(x, y);
    };

    const onMouseLeave = () => {
      pointer.current.x = -9999;
      pointer.current.y = -9999;
      pointer.current.vx = 0;
      pointer.current.vy = 0;
      pointer.current.lastX = null;
      pointer.current.lastY = null;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseenter", (e) => {
      onMouseMove(e);
    });

    const draw = (dt) => {
      ctx.clearRect(0, 0, width, height);

      const px = pointer.current.x;
      const py = pointer.current.y;

      dotsRef.current.forEach((d) => {
        // base movement
        d.x += d.vx * dt;
        d.y += d.vy * dt;

        // wrap around
        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        // proximity effect
        const dx = d.x - px;
        const dy = d.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < INTERACTION_RADIUS) {
          // push in direction of pointer movement, scaled by proximity
          const influence = 1 - dist / INTERACTION_RADIUS;
          d.x += pointer.current.vx * 0.2 * influence * SPEED_BOOST;
          d.y += pointer.current.vy * 0.2 * influence * SPEED_BOOST;
        }

        // slight random drift so movement feels organic
        d.vx += randomBetween(-0.0005, 0.0005);
        d.vy += randomBetween(-0.0005, 0.0005);
        // clamp velocity
        d.vx = Math.max(Math.min(d.vx, 0.5), -0.5);
        d.vy = Math.max(Math.min(d.vy, 0.5), -0.5);

        // draw
        ctx.beginPath();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "white";
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const tick = (time) => {
      const delta = (time - lastTime) / 16.666; // approx frames ratio
      lastTime = time;
      draw(delta);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none "
      ref={canvasRef}
      style={{ mixBlendMode: "normal", background: "rgba(0,0,0,1)" }}
    />
  );
}
