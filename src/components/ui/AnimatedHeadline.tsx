
import { motion } from "framer-motion";

const headlineText = "Grow Beyond Limits, Digitally 🚀";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const charVariants = {
  initial: { opacity: 0, y: -50, rotateX: -90 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const AnimatedHeadline = () => {
  return (
    <motion.h1
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-7xl font-montserrat font-bold mb-10 text-white xl:leading-tight "
    >
      {headlineText.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="whitespace-pre text-wrap " // preserve spaces
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
