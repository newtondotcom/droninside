"use client";

import { motion } from "motion/react";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import GridBackground from "@/components/ui/grid-bg";

export default function ShowreelSection() {
  const videoId = "TTYi8xfwReI";

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section id="showreel" className="h-screen w-full snap-start flex items-center justify-center">
      <GridBackground>
        <div className="mb-4 flex self-center bg-gradient-to-b from-primary to-primary/30 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Showreel
        </div>
        <div className="relative w-full px-6 md:w-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc={`https://www.youtube.com/embed/${videoId}`}
              thumbnailSrc={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              thumbnailAlt="Showreel Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc={`https://www.youtube.com/embed/${videoId}`}
              thumbnailSrc={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              thumbnailAlt="Showreel Video"
            />
          </motion.div>
        </div>
      </GridBackground>
    </section>
  );
}
