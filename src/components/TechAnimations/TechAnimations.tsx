import { motion } from 'framer-motion';
import './TechAnimations.css';

export const CircuitAnimation = ({ style }: { style?: React.CSSProperties }) => (
  <div className="circuit-container" style={style}>
    <svg width="150" height="150" viewBox="0 0 100 100">
      <motion.path
        d="M0 20 L40 20 L40 60 L100 60 M40 20 L60 0 M40 60 L20 80"
        fill="transparent"
        stroke="var(--accent-color)"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        r="1.5"
        fill="var(--accent-color)"
        animate={{ 
          offsetDistance: ["0%", "100%"],
          opacity: [0, 1, 0]
        }}
        style={{ offsetPath: "path('M0 20 L40 20 L40 60 L100 60')" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

export const FloatingCube = ({ style }: { style?: React.CSSProperties }) => (
  <motion.div 
    className="floating-cube"
    style={style}
    animate={{ 
      rotateX: 360, 
      rotateY: 360,
      y: [0, -20, 0]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  >
    <div className="cube-face"></div>
    <div className="cube-face"></div>
    <div className="cube-face"></div>
    <div className="cube-face"></div>
    <div className="cube-face"></div>
    <div className="cube-face"></div>
  </motion.div>
);

export const DataBeam = ({ style }: { style?: React.CSSProperties }) => (
  <div className="data-beam" style={style}>
    <motion.div 
      className="beam-pulse"
      animate={{ 
        y: ['-100%', '200%'],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);
