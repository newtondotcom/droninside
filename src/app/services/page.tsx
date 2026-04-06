"use client";
import Title from "@/components/layout/title";
import Image from "next/image";
import Link from "next/link";
import services from "@/lib/data/services";
import { useTranslations } from "next-intl";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

const Services = () => {
  const t = useTranslations("ServicesPage");
  const tCommon = useTranslations("Common");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col mt-20">
      <Title title={t("services_title")} subtitle={t("service_subtitle")} />

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-24 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.key} href={"/service/" + service.key}>
            <div className="border rounded-lg shadow-lg overflow-hidden h-full">
              <MagicCard gradientColor={isDark ? "#262626" : "#D9D9D955"} className="p-0">
                <div className="p-4 text-left">
                  <h2 className="text-lg font-semibold">{t(service.key + "_title")}</h2>
                  <p className="text-gray-600 dark:text-gray-400 min-h-20">
                    {t(service.key + "_description")}
                  </p>
                </div>
                <div className="px-2">
                  <Image
                    alt={service.key + "_title"}
                    src={service.img || "/placeholder.svg"}
                    className="w-full object-cover rounded-sm"
                    height={576}
                    width={1024}
                  />
                </div>
                <div className="p-4 flex justify-between text-sm text-gray-600">
                  <div>
                    <p>{t("services_duration")}</p>
                    <p className="font-semibold text-primary">+ {service.duration} min</p>
                  </div>
                  <div>
                    <p>{t("services_price")}</p>
                    <p className="font-semibold text-primary">{service.price}€</p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </Link>
        ))}
      </div>

      <div className="mx-auto my-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
        {t("services_redirect")}{" "}
        <a href="/portfolio" className="text-primary underline">
          {tCommon("here_button")}
        </a>
      </div>
    </div>
  );
};

export default Services;
