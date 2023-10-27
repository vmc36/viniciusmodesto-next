import Halo from 'components/Halo';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRef } from 'react';

export default function BorderRadius() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-[290px] bg-[#001413] rounded-xl relative overflow-hidden" ref={ref}>
      <Halo strength={resolvedTheme === 'light' ? 10 : 4}>
        <motion.div className="w-[300px] absolute right-4 z-10 -bottom-10" style={{ y }}></motion.div>
        <Image width={504} height={282} src="/projects/radius/home.png" alt="Projeto Border Radius Generator" className="rounded-[26px]" />
      </Halo>
    </div>
  );
}
