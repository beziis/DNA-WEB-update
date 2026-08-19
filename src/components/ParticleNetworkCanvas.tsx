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
    let isLightMode = document.documentElement.classList.contains('light');
    // Palette definition for both light and dark themes
    const getPalette = (light: boolean) => {
      if (light) {
        return ['#0A2546', '#0B2442', '#1E3A8A', '#0284C7', '#0A2546'];
      }
      return ['#FFFFFF', '#F8FAFC', '#F1F5F9', '#38BDF8', '#FFFFFF'];
    };
    let colorPalette = getPalette(isLightMode);

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
      pointer.radius = width < 768 ? 120 : width < 1024 ? 150 : 180;
      initParticles();
    };

    // Initialize Particles with rich responsive density across phone, tablet, desktop
    const initParticles = () => {
      particles = [];
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;
      }

      // Responsive Density across Phone (<768px), Tablet (768px-1023px), Desktop (1024px+)
      const isPhone = width < 768;
      const isTablet = width >= 768 && width < 1024;

      const count = isPhone ? 22 : isTablet ? 32 : Math.min(Math.max(Math.floor((width * height) / 16000), 38), 54);
      const velocityScale = isPhone ? 0.18 : isTablet ? 0.22 : 0.3;

      for (let i = 0; i < count; i++) {
        const radius = isPhone ? Math.random() * 1.1 + 0.9 : Math.random() * 1.3 + 1.0;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * velocityScale,
          vy: (Math.random() - 0.5) * velocityScale,
          radius,
          alpha: isPhone
            ? (isLightMode ? Math.random() * 0.25 + 0.25 : Math.random() * 0.3 + 0.3)
            : isTablet
              ? (isLightMode ? Math.random() * 0.3 + 0.3 : Math.random() * 0.35 + 0.35)
              : (isLightMode ? Math.random() * 0.35 + 0.35 : Math.random() * 0.4 + 0.4),
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

    const themeObserver = new MutationObserver(() => {
      const currentLight = document.documentElement.classList.contains('light');
      if (currentLight !== isLightMode) {
        isLightMode = currentLight;
        colorPalette = getPalette(isLightMode);
        for (let i = 0; i < particles.length; i++) {
          particles[i].color = colorPalette[i % colorPalette.length];
        }
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerLeave, { passive: true });

    updateDimensions();

    const maxDistance = width < 768 ? 110 : 135;
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

      const strokeColor = isLightMode ? '#0A2546' : '#FFFFFF';

      // Update & Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle position update
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;

        // Soft boundary reflection
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Pointer displacement effect
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius && dist > 0) {
            const force = (1 - dist / pointer.radius) * 0.32;
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
            const alpha = (1 - dist / maxDistance) * (isLightMode ? 0.32 : 0.38);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = strokeColor;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.95;
            ctx.stroke();

            // Data flow signal pulse
            if (p.pulseProgress !== undefined) {
              p.pulseProgress += 0.003;
              if (p.pulseProgress > 1) p.pulseProgress = 0;

              if (alpha > 0.04 && i % 2 === 0) {
                const pulseX = p.x + (p2.x - p.x) * p.pulseProgress;
                const pulseY = p.y + (p2.y - p.y) * p.pulseProgress;

                ctx.beginPath();
                ctx.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = isLightMode ? '#0284C7' : '#38BDF8';
                ctx.globalAlpha = Math.min(alpha * 2.2, 0.75);
                ctx.fill();
              }
            }
          }
        }

        // Connect particle to cursor/touch pointer
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius) {
            const alpha = (1 - dist / pointer.radius) * (isLightMode ? 0.40 : 0.45);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = isLightMode ? '#0284C7' : '#38BDF8';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.15;
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
      themeObserver.disconnect();
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
