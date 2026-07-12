import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './NeuralAnimation.css';

interface NeuralAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  isGlobal?: boolean;
}

const NeuralAnimation = ({ className, style, isGlobal }: NeuralAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax otimizado para rodar via sub-pixels na GPU
  const parallaxY = useTransform(scrollY, [0, 5000], [0, -400]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let trailParticles: Particle[] = []; 
    
    // Aumento na quantidade base e alcance das conexões
    const particleCount = isGlobal ? 300 : 300;
    const connectionDistance = isGlobal ? 180 : 100;
    const mouseRadius = 250;
    const mouseConnectionDist = isGlobal ? 240 : 0;

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      life: number; 
      isTrail: boolean;

      constructor(x: number, y: number, isTrail = false) {
        this.x = x;
        this.y = y;
        this.isTrail = isTrail;
        this.vx = (Math.random() - 0.5) * (isGlobal ? 0.25 : 0.6);
        this.vy = (Math.random() - 0.5) * (isGlobal ? 0.25 : 0.6);
        this.baseSize = Math.random() * (isGlobal ? 1.2 : 2) + 0.6;
        this.size = this.baseSize;
        this.opacity = isTrail ? 0.7 : (Math.random() * 0.4 + 0.3);
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.015 + Math.random() * 0.02;
        this.life = 1.0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.isTrail) {
          this.life -= 0.012; // Rastro dura mais tempo
        }

        this.pulse += this.pulseSpeed;
        this.size = this.baseSize * (1 + Math.sin(this.pulse) * 0.3);

        if (!canvas) return;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && !this.isTrail) {
          const force = (mouseRadius - distance) / mouseRadius;
          const forceX = (dx / distance) * force * 2.0;
          const forceY = (dy / distance) * force * 2.0;
          this.x -= forceX;
          this.y -= forceY;
        }
      }

      draw(_isLightTheme: boolean) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        const color = '#00FFFF'; // Pure Cyan for maximum vibrance

        ctx.fillStyle = color;
        const finalOpacity = this.isTrail ? this.life : this.opacity;
        ctx.globalAlpha = finalOpacity * (0.9 + Math.sin(this.pulse) * 0.1);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      mouse.x = newX;
      mouse.y = newY;

      // Criação mais frequente de pontos no rastro
      if (isGlobal && Math.random() > 0.9 ) {
        trailParticles.push(new Particle(newX, newY, true));
        if (trailParticles.length > 100) trailParticles.shift();
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLightTheme = document.documentElement.classList.contains('light-theme');
      const accentColor = '#00FFFF'; // Pure Cyan

      trailParticles = trailParticles.filter(p => p.life > 0);
      const allParticles = [...particles, ...trailParticles];

      for (let i = 0; i < allParticles.length; i++) {
        const p1 = allParticles[i];
        p1.update();
        p1.draw(isLightTheme);

        if (isGlobal && mouse.x > 0) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouseConnectionDist) {
            ctx.beginPath();
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = (1 - mdist / mouseConnectionDist) * 0.7;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < allParticles.length; j++) {
          const p2 = allParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = accentColor;

            let alpha = (1 - distance / connectionDistance) * (isGlobal ? 0.7 : 0.8);

            if (p1.isTrail || p2.isTrail) {
              alpha *= Math.min(p1.life, p2.life) * 1.8;
            }

            ctx.globalAlpha = Math.min(alpha, 1);
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isGlobal]);

  return (
    <motion.div 
      className={`neural-container ${isGlobal ? 'global' : ''} ${className || ''}`}
      style={{ ...style, y: isGlobal ? parallaxY : 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <canvas ref={canvasRef} className="neural-canvas" />
      
      {!isGlobal && (
        <div className="ai-core">
          <div className="core-inner"></div>
          <div className="core-pulse"></div>
        </div>
      )}
    </motion.div>
  );
};

export default NeuralAnimation;
