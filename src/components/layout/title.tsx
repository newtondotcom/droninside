import type React from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  subtitle: string;
};

const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="b-10 text-center mb-8 px-16 pt-8"
    >
      <h1 className="text-2xl font-bold text-secondary-foreground sm:text-3xl">{title}</h1>
      <p className="mt-1.5 text-sm text-primary">{subtitle}</p>
    </motion.div>
  );
};

export default Title;
