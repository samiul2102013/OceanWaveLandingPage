"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { playTick } from "@/lib/sound";

type WavePreset = "EDGE_PULSE" | "RESONANCE" | "HARMONIC_FLOW";

export default function EdgeWaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [preset, setPreset] = useState<WavePreset>("EDGE_PULSE");
  const [frequency, setFrequency] = useState(1.6);
  const [amplitude, setAmplitude] = useState(36);
  const [nodeCount, setNodeCount] = useState(32);
  const [hoverCoord, setHoverCoord] = useState<{ x: number; y: number } | null>(null);

  const timeRef = useRef(0.5);
  const animFrameRef = useRef<number | null>(null);

  const applyPreset = (p: WavePreset) => {
    playTick(900, 0.02);
    setPreset(p);
    if (p === "EDGE_PULSE") {
      setFrequency(1.6);
      setAmplitude(36);
      setNodeCount(32);
    } else if (p === "RESONANCE") {
      setFrequency(2.8);
      setAmplitude(48);
      setNodeCount(48);
    } else if (p === "HARMONIC_FLOW") {
      setFrequency(0.9);
      setAmplitude(24);
      setNodeCount(24);
    }
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 200;
    const centerY = height / 2;

    // Reset transform to match DPR
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Clear viewport
    ctx.clearRect(0, 0, width, height);

    // Draw background technical grid lines
    ctx.strokeStyle = "rgba(100, 110, 130, 0.15)";
    ctx.lineWidth = 1;

    // Center and threshold guide lines
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(0, Math.max(10, centerY - amplitude));
    ctx.lineTo(width, Math.max(10, centerY - amplitude));
    ctx.moveTo(0, Math.min(height - 10, centerY + amplitude));
    ctx.lineTo(width, Math.min(height - 10, centerY + amplitude));
    ctx.stroke();

    // Vertical step markers
    const vSteps = 8;
    for (let i = 1; i < vSteps; i++) {
      const vx = (width / vSteps) * i;
      ctx.beginPath();
      ctx.moveTo(vx, 0);
      ctx.lineTo(vx, height);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    const t = timeRef.current;

    // Secondary harmonic wave (Ocean cyan/teal)
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 175, 155, 0.55)";
    ctx.lineWidth = 1.5;
    for (let x = 0; x <= width; x += 3) {
      const nx = x / width;
      const y =
        centerY +
        Math.sin(nx * Math.PI * frequency * 2.2 - t * 0.8) *
          (amplitude * 0.55) *
          Math.sin(nx * Math.PI);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Primary Edge Waveform (Tactile Signal Orange)
    ctx.beginPath();
    ctx.strokeStyle = "#ff4800";
    ctx.lineWidth = 2.5;

    const wavePoints: { x: number; y: number }[] = [];
    for (let x = 0; x <= width; x += 2) {
      const nx = x / width;
      const envelope = Math.sin(nx * Math.PI);
      const wave1 = Math.sin(nx * Math.PI * frequency * 2 + t);
      const wave2 = Math.cos(nx * Math.PI * frequency * 4 - t * 1.4) * 0.35;
      const y = centerY + (wave1 + wave2) * amplitude * envelope;
      wavePoints.push({ x, y });

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Gradient fill below primary curve
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, centerY - amplitude, 0, height);
    grad.addColorStop(0, "rgba(255, 72, 0, 0.12)");
    grad.addColorStop(1, "rgba(255, 72, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Discrete sampling nodes along curve
    const interval = Math.max(1, Math.floor(wavePoints.length / nodeCount));
    for (let i = 0; i < wavePoints.length; i += interval) {
      const pt = wavePoints[i];
      if (!pt) continue;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 72, 0, 0.35)";
      ctx.lineWidth = 1;
      ctx.moveTo(pt.x, centerY);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ff4800";
      ctx.fill();

      // Highlight hover node
      if (hoverCoord && Math.abs(hoverCoord.x - pt.x) < 16) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6.5, 0, Math.PI * 2);
        ctx.strokeStyle = "#ff4800";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = "10px monospace";
        ctx.fillStyle = "#101216";
        ctx.fillText(`Δ${Math.round(centerY - pt.y)}`, pt.x + 8, pt.y - 8);
      }
    }
  }, [amplitude, frequency, nodeCount, hoverCoord]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const timer = setTimeout(() => setIsRunning(false), 0);
      return () => clearTimeout(timer);
    }

    let lastTime = performance.now();
    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isRunning) {
        timeRef.current += delta * 2.2;
      }
      draw();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [draw, isRunning]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.floor(rect.width || 400);
      const h = Math.floor(rect.height || 200);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      draw();
    };

    handleResize();
    const timer = setTimeout(handleResize, 50);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <div className="relative border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 shadow-sm rounded-none">
      {/* Corner crosshairs for hardware chassis feel */}
      <div className="absolute -top-1.5 -left-1.5 font-mono text-[11px] text-[var(--text-dim)] select-none">+</div>
      <div className="absolute -top-1.5 -right-1.5 font-mono text-[11px] text-[var(--text-dim)] select-none">+</div>
      <div className="absolute -bottom-1.5 -left-1.5 font-mono text-[11px] text-[var(--text-dim)] select-none">+</div>
      <div className="absolute -bottom-1.5 -right-1.5 font-mono text-[11px] text-[var(--text-dim)] select-none">+</div>

      {/* Header bar / Instrument Specs — split into 2 rows to prevent overlap */}
      <div className="pb-3 border-b border-[var(--border)] space-y-2">
        {/* Row 1: Title */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
          <span className="font-semibold text-[var(--foreground)] uppercase text-xs font-mono tracking-wider">
            EDGE WAVE HARMONIZER
          </span>
          <span className="text-[var(--text-dim)] text-[10px] font-mono">
            {"//"} SYS.MOD-01
          </span>
        </div>
        {/* Row 2: Live stats + control */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-dim)] tracking-wider">
            <span>FREQ:&nbsp;{frequency.toFixed(1)}x</span>
            <span>NODES:&nbsp;{nodeCount}</span>
          </div>
          <button
            onClick={() => {
              playTick(750, 0.02);
              setIsRunning(!isRunning);
            }}
            aria-label={isRunning ? "Pause animation" : "Resume animation"}
            className="px-2 py-0.5 border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface-subtle)] text-[10px] font-mono uppercase tracking-wider text-[var(--foreground)] transition-colors active:translate-y-px"
          >
            {isRunning ? "PAUSE" : "RESUME"}
          </button>
        </div>
      </div>

      {/* Canvas Display Viewport */}
      <div className="relative mt-3 h-64 sm:h-80 w-full bg-[var(--background)] border border-[var(--border)] overflow-hidden cursor-crosshair">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setHoverCoord({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setHoverCoord(null)}
          aria-label="Interactive edge waveform visualization representing digital and real-world interface signals"
          role="img"
        />

        {/* Overlay grid coordinates */}
        <div className="absolute bottom-2 left-2 pointer-events-none text-[9px] font-mono text-[var(--text-dim)] uppercase">
          RANGE: ±{amplitude}px {"//"} POLARITY: BALANCED
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none text-[9px] font-mono text-[var(--text-dim)] uppercase">
          LOC: 23°48&apos;N, 90°24&apos;E
        </div>
      </div>

      {/* Tactile Control Panel - Structured to avoid wrapping */}
      <div className="mt-4 pt-3.5 border-t border-[var(--border)] space-y-3 text-[11px] font-mono">
        {/* Preset Selector */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[10px] text-[var(--text-dim)] uppercase tracking-wider">
            <span>Signal Preset</span>
            <span className="text-[var(--accent)] font-medium">
              {preset === "EDGE_PULSE" ? "Edge Pulse" : preset === "RESONANCE" ? "Resonance" : "Harmonic"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {(["EDGE_PULSE", "RESONANCE", "HARMONIC_FLOW"] as WavePreset[]).map((p) => {
              const labelMap: Record<WavePreset, string> = {
                EDGE_PULSE: "Edge Pulse",
                RESONANCE: "Resonance",
                HARMONIC_FLOW: "Harmonic",
              };
              return (
                <button
                  key={p}
                  onClick={() => applyPreset(p)}
                  className={`py-1.5 px-2 text-center text-[10px] sm:text-[11px] font-mono tracking-wider border transition-colors whitespace-nowrap ${
                    preset === p
                      ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] font-semibold shadow-xs"
                      : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--foreground)] bg-[var(--surface)]"
                  }`}
                >
                  {labelMap[p]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliders in clean 2-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Frequency Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] text-[var(--text-dim)] uppercase tracking-wider">
              <span>Cycle Frequency</span>
              <span className="text-[var(--foreground)] font-semibold">{frequency.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3.5"
              step="0.1"
              value={frequency}
              onChange={(e) => {
                setFrequency(parseFloat(e.target.value));
              }}
              className="w-full accent-[var(--accent)] h-1.5 bg-[var(--surface-subtle)] rounded-none cursor-pointer"
              aria-label="Frequency slider"
            />
          </div>

          {/* Node Sampling Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] text-[var(--text-dim)] uppercase tracking-wider">
              <span>Mesh Points</span>
              <span className="text-[var(--foreground)] font-semibold">{nodeCount} pts</span>
            </div>
            <input
              type="range"
              min="12"
              max="64"
              step="4"
              value={nodeCount}
              onChange={(e) => {
                setNodeCount(parseInt(e.target.value, 10));
              }}
              className="w-full accent-[var(--accent)] h-1.5 bg-[var(--surface-subtle)] rounded-none cursor-pointer"
              aria-label="Mesh node count slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
