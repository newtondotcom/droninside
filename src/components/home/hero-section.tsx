"use client";
import { motion, type Variants } from "motion/react";
import { useState, useEffect } from "react";
import HandWrittenWord from "@/components/kokonutui/hand-written-word";
import { useTranslations } from "next-intl";
import Drone from "@/components/layout/drone";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnScreen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const droneVariants: Variants = {
    offscreen: {
      x: -500,
      opacity: 0,
      rotate: -360,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="h-screen w-full snap-start flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <motion.div
        className="flex text-center max-w-4xl px-6 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary/80 space-y-8 text-shadow-sm">
          {t("sentence")}
          <HandWrittenWord word={t("inside")} />
        </h1>
      </motion.div>

      <motion.div
        initial="offscreen"
        animate={onScreen ? "onscreen" : "offscreen"}
        variants={droneVariants}
        className="w-full flex text-primary/80 justify-center"
        aria-hidden="true"
      >
        <Drone />
      </motion.div>
    </section>
  );
}