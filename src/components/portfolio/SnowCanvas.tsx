import { useEffect, useRef } from "react";

interface Flake {
  x: number;
  y: number;
  radius: number;
  velocity: number;
  drift: number;
}

export function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const flakes: Flake[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      velocity: Math.random() * 0.6 + 0.25,
      drift: Math.random() * 6,
    }));

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(255,255,255,.75)";
      for (const flake of flakes) {
        flake.y += flake.velocity;
        flake.drift += 0.01;
        flake.x += Math.sin(flake.drift) * 0.4;
        if (flake.y > height) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        context.beginPath();
        context.arc(flake.x, flake.y, flake.radius, 0, 7);
        context.fill();
      }
      frame = window.requestAnimationFrame(draw);
    };
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="snow-canvas" aria-hidden="true" />;
}
