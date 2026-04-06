"use client";

import Image from "next/image";
import Link from "next/link";
import { RealEstateModal } from "@/components/ui/real-estate-modal";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="services"
      className="h-screen w-full snap-start flex flex-col justify-center overflow-hidden px-6 align-middle mt-20"
    >
      <div className="hidden px-4 lg:flex">
        <Image
          src="/cover.jpg"
          width={1920}
          height={1080}
          className="h-full w-full rounded-xl object-cover"
          alt="cover"
        />
      </div>
      <div className="h-[150px] lg:hidden">
        <Image
          src="/mobile.jpg"
          width={800}
          height={600}
          alt="header"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-row">
        <div className="my-auto flex h-full w-full flex-col justify-center px-2 py-8 align-middle md:w-1/2 md:py-0">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white md:text-3xl">
              {t("video_description")}
            </h2>
            <p className="block text-black dark:text-white md:mt-4">{t("video_text")}</p>
            <div className="mt-4 md:mt-8">
              <Link href={"/contact"}>
                <Button className="font-semibold text-lg py-4 px-6">{t("get_started")}</Button>
              </Link>
            </div>

            <div className="mt-8">
              <RealEstateModal />
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <Image
            src="/construction.jpg"
            width={800}
            height={600}
            alt="header"
            className="h-full w-full object-cover shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
