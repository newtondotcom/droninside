"use client";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import Title from "@/components/layout/title";
import videos from "@/lib/data/videos";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("PortfolioPage");
  const tCommon = useTranslations("Common");
  const tVideo = useTranslations("VideoSection");

  return (
    <div className="flex flex-col mt-20">
      <Title title={t("title") || "Portfolio"} subtitle={t("subtitle") || "Our previous work"} />
      <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2 md:px-24 lg:grid-cols-4">
        {videos.map((video) => (
          <div key={video.id} className="mx-4 my-4 shrink">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video.id}`}
                thumbnailSrc={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                thumbnailAlt="Projet ${video.id}"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video.id}`}
                thumbnailSrc={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                thumbnailAlt="Projet ${video.id}"
              />
            </div>
            <h2 className="text-center text-sm font-semibold text-neutral-700 mt-4 dark:text-neutral-400 hover:scale-105 transition-all duration-300">
              {tVideo(video.descriptionKey)}
            </h2>
          </div>
        ))}
      </div>

      <div className="mx-auto my-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
        {t("redirect")}{" "}
        <a href="/faq" className="text-primary underline">
          {tCommon("here_button")}
        </a>
      </div>
    </div>
  );
}
