import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  pulseProgress?: number;
}

interface ParticleNetworkCanvasProps {
  className?: string;
}

export default function ParticleNetworkCanvas({ className = '' }: ParticleNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isMobile = false;

    // Interaction pointer state
    const pointer = {
      x: -1000,
      y: -1000,
      radius: 140,
      active: false
    };

    let particles: Particle[] = [];
    // Default (dark mode) palette uses light particles; switch when .light class present
    const getColorPalette = () => {
      if (document.documentElement.classList.contains('light')) {
        return ['#0A2546', '#0A2546', '#0A2546', '#0A2546', '#0A2546'];
      }
      return ['#FFFFFF', '#F8FAFC', '#F1F5F9', '#E2E8F0', '#FFFFFF'];
    };
    let colorPalette = getColorPalette();

    // Resize Handler
    const updateDimensions = () => {
      const parent = canvas.parentElement || canvas.ownerDocument.body;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      isMobile = width < 768;
      pointer.radius = isMobile ? 120 : 170;
      initParticles();
    };

    // Initialize Particles with mobile optimization
    const initParticles = () => {
      particles = [];
      const densityArea = isMobile ? 22400 : 14400;
      const count = Math.min(
        Math.max(Math.floor((width * height) / densityArea), isMobile ? 19 : 35),
        isMobile ? 28 : 53
      );

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.3 + 1.0;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          radius,
          alpha: Math.random() * 0.3 + 0.3,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          pulseProgress: Math.random()
        });
      }
    };

    // Event Listeners for Interaction (Window-level passive)
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX = -1000;
      let clientY = -1000;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerLeave, { passive: true });

    updateDimensions();

    const maxDistance = isMobile ? 100 : 125;
    let lastTime = performance.now();

    // Main Animation Loop
    const animate = (currentTime: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Update & Render Particles
        // Update color palette dynamically in case theme changed
        colorPalette = getColorPalette();
        for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Apply the current palette to existing particles as well as newly
        // created ones, so a live theme switch updates every network node.
        p.color = colorPalette[i % colorPalette.length];

        // Particle position update
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;

        // Soft boundary reflection
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Subtle pointer displacement effect
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius && dist > 0) {
            const force = (1 - dist / pointer.radius) * 0.28;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Network connection lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = document.documentElement.classList.contains('light') ? '#0A2546' : '#FFFFFF';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.88;
            ctx.stroke();

            // Data flow signal pulse
            if (p.pulseProgress !== undefined) {
              p.pulseProgress += 0.0025;
              if (p.pulseProgress > 1) p.pulseProgress = 0;

              if (alpha > 0.05 && i % 2 === 0) {
                const pulseX = p.x + (p2.x - p.x) * p.pulseProgress;
                const pulseY = p.y + (p2.y - p.y) * p.pulseProgress;

                ctx.beginPath();
                ctx.arc(pulseX, pulseY, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = document.documentElement.classList.contains('light') ? '#0A2546' : '#FFFFFF';
                ctx.globalAlpha = Math.min(alpha * 2.0, 0.68);
                ctx.fill();
              }
            }
          }
        }

        // Connect particle to cursor if nearby
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius) {
            const alpha = (1 - dist / pointer.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = document.documentElement.classList.contains('light') ? '#0A2546' : '#FFFFFF';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.05;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
