"use client";

import type React from "react";

import { motion, type HTMLMotionProps } from "motion/react";
import { LandPlot, Mountain, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useTranslations } from "next-intl";
import Btn13 from "@/components/kokonutui/btn-13";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTheme } from "next-themes";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  animation: {
    initial: HTMLMotionProps<"div">["initial"];
    animate: HTMLMotionProps<"div">["animate"];
    transition: HTMLMotionProps<"div">["transition"];
  };
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  animation,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      viewport={{ once: false }}
      className="flex flex-col"
    >
      <Card className="w-full max-w-sm border-none p-0 shadow-none">
        <MagicCard gradientColor={isDark ? "#262626" : "#D9D9D955"} className="p-0">
          <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full mr-4">{icon}</div>
              <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 p-4">
            <span className="hidden md:flex text-neutral-600 dark:text-neutral-300 mb-4 prose min-h-[250px]">
              <Markdown>{description}</Markdown>
            </span>
            <div className="hidden md:flex my-auto relative md:h-48 w-full rounded-lg overflow-hidden">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                sizes="full"
                className="object-cover"
              />
            </div>
          </CardContent>
        </MagicCard>
      </Card>
    </motion.div>
  );
};

export default function Aerial3DSection() {
  const t = useTranslations("Aerial3DSection");

  const services: ServiceCardProps[] = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: t("aerial_photography_title"),
      description: t("aerial_photography_description"),
      imageSrc: "/aerial-view.jpg",
      animation: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.1 },
      },
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: t("exterior_3d_title"),
      description: t("exterior_3d_description"),
      imageSrc: "/photogrammetry.png",
      animation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      },
    },
    {
      icon: <LandPlot className="h-8 w-8 text-primary" />,
      title: t("interior_3d_title"),
      description: t("interior_3d_description"),
      imageSrc: "/floor-plan.png",
      animation: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.3 },
      },
    },
  ];

  return (
    <section
      id="aerial-3d"
      className="h-screen w-full snap-start flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t("aerial_3d_title")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t("aerial_3d_subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/contact">
            <Btn13 className="font-semibold text-lg py-4 px-6" label={t("learn_more_cta")} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
