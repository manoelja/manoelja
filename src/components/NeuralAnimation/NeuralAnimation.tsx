import { useState, useEffect } from 'react';
import NeuralAnimationDesktop from './NeuralAnimationDesktop';
import NeuralAnimationMobile from './NeuralAnimationMobile';

interface NeuralAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  isGlobal?: boolean;
}

const NeuralAnimation = ({ className, style, isGlobal }: NeuralAnimationProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return <NeuralAnimationMobile className={className} style={style} isGlobal={isGlobal} />;
  }

  return <NeuralAnimationDesktop className={className} style={style} isGlobal={isGlobal} />;
};

export default NeuralAnimation;
