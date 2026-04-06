"use client";

import { useTranslations } from "next-intl";
import { LightRays } from "@/components/ui/light-rays";

export default function AboutSection() {
  const t = useTranslations("HomePage");
  const tCommon = useTranslations("Common");

  return (
    <section
      id="about"
      className="h-screen w-full snap-start flex items-center justify-center relative flex-col overflow-hidden rounded-md bg-white/[0.96] dark:bg-black/[0.96] md:items-center md:justify-center"
    >
      <LightRays color="oklch(0.723 0.219 149.579)" />
      <div className="flex flex-col relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-gradient-to-b from-neutral-400 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-7xl">
          {t("who_we_are")}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-semibold text-neutral-600 dark:text-neutral-300">
          <span className="font-bold text-primary">Droninside</span> {t("company_description")}
        </p>
        <div className="mx-auto mt-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
          {t("discover_services")}{" "}
          <a href="/services" className="text-primary underline">
            {tCommon("here_button")}
          </a>
        </div>
      </div>
    </section>
  );
}
