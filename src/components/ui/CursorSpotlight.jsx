import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const CursorSpotlight = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [hasMouse, setHasMouse] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const x = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      if (!hasMouse) setHasMouse(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [hasMouse, mouseX, mouseY]);

  if (prefersReducedMotion || !hasMouse || theme !== 'dark') return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] w-[600px] h-[600px] rounded-full"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(59,130,246,0.09) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)',
      }}
    />
  );
};

export default CursorSpotlight;
