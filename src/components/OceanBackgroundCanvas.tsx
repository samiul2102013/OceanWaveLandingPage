"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
  baseY: number;
}

export default function OceanBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let isDark = document.documentElement.getAttribute("data-theme") !== "light";

    // Observe theme attribute changes
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute("data-theme") !== "light";
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Scroll parallax tracking
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mouse drift tracking
    let mouseX = 0.5;
    let mouseY = 0.5;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Spawn bioluminescent ocean particles
    const particles: Particle[] = Array.from({ length: 85 }, () => {
      const y = Math.random();
      return {
        x: Math.random(),
        y,
        baseY: y,
        size: Math.random() * 2.2 + 0.6,
        speed: Math.random() * 0.0003 + 0.0001,
        opacity: Math.random() * 0.45 + 0.15,
        drift: (Math.random() - 0.5) * 0.0003,
      };
    });

    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Multi-harmonic wave generator
    const drawWave = (
      yBase: number,
      amplitude: number,
      frequency: number,
      speed: number,
      strokeColor: string,
      strokeWidth: number,
      fillColor?: string,
      secondaryHarmonic = 0.4
    ) => {
      ctx.beginPath();
      const step = W > 1200 ? 4 : 6;
      for (let x = 0; x <= W + step; x += step) {
        const nx = x / W;
        const wave =
          Math.sin(nx * Math.PI * frequency + t * speed) * amplitude +
          Math.sin(nx * Math.PI * frequency * 1.7 - t * speed * 0.75 + mouseX * 0.5) * (amplitude * secondaryHarmonic) +
          Math.sin(nx * Math.PI * frequency * 3.2 + t * speed * 0.4) * (amplitude * 0.15);
        const y = yBase + wave;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      if (fillColor) {
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
      }

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    };

    const loop = () => {
      // Smooth scroll lerp for video-like parallax drift
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      const scrollFactor = (currentScrollY * 0.12) % H;

      // ── Background Foundation
      if (isDark) {
        // Deep obsidian abyss gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, "#04070d");
        bgGrad.addColorStop(0.35, "#060d18");
        bgGrad.addColorStop(0.7, "#051322");
        bgGrad.addColorStop(1, "#030c17");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // Ambient Horizon glow
        const horizon = ctx.createRadialGradient(
          W * (0.45 + mouseX * 0.1),
          H * 0.65,
          0,
          W * 0.5,
          H * 0.65,
          W * 0.7
        );
        horizon.addColorStop(0, "rgba(0, 190, 160, 0.08)");
        horizon.addColorStop(0.4, "rgba(0, 110, 140, 0.04)");
        horizon.addColorStop(1, "transparent");
        ctx.fillStyle = horizon;
        ctx.fillRect(0, 0, W, H);

        // Tech grid mesh points
        ctx.fillStyle = "rgba(0, 220, 190, 0.02)";
        const gs = 48;
        for (let gx = 0; gx < W; gx += gs) {
          for (let gy = 0; gy < H; gy += gs) {
            ctx.beginPath();
            ctx.arc(gx, gy, 0.7, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Multi-tier Fluid Wave Ocean Layers (Parallax based on scroll)
        // Layer 1 (Deepest Ocean floor)
        drawWave(
          H * 0.90 - scrollFactor * 0.2,
          56,
          1.2,
          0.18,
          "rgba(0, 65, 80, 0.45)",
          1,
          "rgba(2, 18, 30, 0.22)"
        );

        // Layer 2 (Mid-depth flow)
        drawWave(
          H * 0.82 - scrollFactor * 0.35,
          48,
          1.8,
          0.32,
          "rgba(0, 95, 105, 0.55)",
          1.2,
          "rgba(3, 26, 42, 0.16)"
        );

        // Layer 3 (Current swell)
        drawWave(
          H * 0.73 - scrollFactor * 0.55,
          40,
          2.3,
          0.50,
          "rgba(0, 140, 130, 0.60)",
          1.4,
          "rgba(5, 36, 56, 0.12)"
        );

        // Layer 4 (Surge wave with teal crest)
        drawWave(
          H * 0.65 - scrollFactor * 0.8,
          32,
          3.1,
          0.75,
          "rgba(0, 195, 175, 0.65)",
          1.8,
          "rgba(0, 48, 68, 0.07)"
        );

        // Layer 5 (Surface crest shimmer)
        drawWave(
          H * 0.59 - scrollFactor * 1.05,
          22,
          4.4,
          1.15,
          "rgba(0, 235, 210, 0.45)",
          1.6
        );

        // Foam micro-crest
        drawWave(
          H * 0.585 - scrollFactor * 1.05,
          12,
          6.5,
          1.7,
          "rgba(190, 255, 245, 0.2)",
          1.0
        );

        // Bioluminescent Floating Particles
        particles.forEach((p) => {
          p.y -= p.speed;
          p.x += p.drift + (mouseX - 0.5) * 0.0001;
          if (p.y < -0.02) {
            p.y = 1.02;
            p.x = Math.random();
          }
          if (p.x < 0 || p.x > 1) p.drift *= -1;

          const px = p.x * W;
          const py = ((p.y * H - scrollFactor * 0.4) % H + H) % H;

          // Glowing particle halo
          const pGlow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3.5);
          pGlow.addColorStop(0, `rgba(0, 230, 205, ${p.opacity * 0.7})`);
          pGlow.addColorStop(1, "transparent");
          ctx.fillStyle = pGlow;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(180, 255, 245, ${p.opacity})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Top Cinematic Vignette
        const topGrad = ctx.createLinearGradient(0, 0, 0, H * 0.22);
        topGrad.addColorStop(0, "rgba(4, 7, 13, 0.85)");
        topGrad.addColorStop(1, "transparent");
        ctx.fillStyle = topGrad;
        ctx.fillRect(0, 0, W, H);
      } else {
        // Light Mode: Architectural Sea-Mist & Engineering Blueprint Ocean
        const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, "#f9fafb");
        bgGrad.addColorStop(0.4, "#f2f5f7");
        bgGrad.addColorStop(0.8, "#e8eef3");
        bgGrad.addColorStop(1, "#dfe7ee");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // Ambient daylight horizon glow
        const horizon = ctx.createRadialGradient(
          W * 0.5,
          H * 0.7,
          0,
          W * 0.5,
          H * 0.7,
          W * 0.65
        );
        horizon.addColorStop(0, "rgba(0, 160, 150, 0.08)");
        horizon.addColorStop(1, "transparent");
        ctx.fillStyle = horizon;
        ctx.fillRect(0, 0, W, H);

        // Crisp engineering dot grid
        ctx.fillStyle = "rgba(20, 30, 45, 0.035)";
        const gs = 44;
        for (let gx = 0; gx < W; gx += gs) {
          for (let gy = 0; gy < H; gy += gs) {
            ctx.beginPath();
            ctx.arc(gx, gy, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Layered waves in translucent slate / teal
        drawWave(
          H * 0.88 - scrollFactor * 0.25,
          50,
          1.3,
          0.18,
          "rgba(0, 130, 140, 0.25)",
          1.2,
          "rgba(0, 130, 140, 0.04)"
        );
        drawWave(
          H * 0.78 - scrollFactor * 0.45,
          42,
          1.9,
          0.32,
          "rgba(0, 150, 160, 0.35)",
          1.4,
          "rgba(0, 150, 160, 0.05)"
        );
        drawWave(
          H * 0.68 - scrollFactor * 0.75,
          32,
          2.8,
          0.6,
          "rgba(0, 165, 155, 0.45)",
          1.6,
          "rgba(0, 165, 155, 0.04)"
        );
        drawWave(
          H * 0.60 - scrollFactor * 1.0,
          20,
          4.2,
          1.0,
          "rgba(0, 180, 165, 0.4)",
          1.2
        );

        // Subtle floating specs
        particles.slice(0, 45).forEach((p) => {
          p.y -= p.speed * 0.7;
          if (p.y < -0.02) p.y = 1.02;
          const px = p.x * W;
          const py = ((p.y * H - scrollFactor * 0.3) % H + H) % H;

          ctx.fillStyle = `rgba(0, 120, 130, ${p.opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      t += 0.007;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
