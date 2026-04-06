"use client";

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import videos from "@/lib/data/videos";
import type { Video as VideoType } from "@/lib/data/videos";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Play, Video } from "lucide-react";
import { ServiceType } from "@/lib/data/services";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ServicePage() {
  const pathname = usePathname();
  const serviceName = pathname.split("/").pop() as ServiceType;

  const tServiceDetail = useTranslations("ServiceDetailPage");
  const tServices = useTranslations("ServicesPage");
  const tVideo = useTranslations("VideoSection");
  const tCommon = useTranslations("Common");

  // Validate service type
  if (!Object.values(ServiceType).includes(serviceName)) {
    redirect("/404");
  }

  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>([]);
  const serviceTitle = tServices(`${serviceName}_title`) || serviceName;
  const serviceDescription = tServices(`${serviceName}_description`) || "";

  useEffect(() => {
    const filteredVideos = videos.filter(
      (video) => video.type.toLowerCase() === serviceName.toLowerCase(),
    );
    setRelatedVideos(filteredVideos);
  }, [serviceName]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 mt-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{serviceTitle}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          {serviceDescription}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">{tServiceDetail("related_videos")}</h2>

        {relatedVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} tVideo={tVideo} />
            ))}
          </div>
        ) : (
          <NoVideosPlaceholder serviceTitle={serviceTitle} tServiceDetail={tServiceDetail} />
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg mb-6">{tServiceDetail("interested_in_service")}</p>
        <Link href="/contact">
          <Button className="font-semibold text-lg py-4 px-6">
            {tCommon("contact_us_button")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface VideoCardProps {
  video: VideoType;
  tVideo: any;
}

function VideoCard({ video, tVideo }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={tVideo(video.descriptionKey)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Link
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30"
            >
              <Play className="h-6 w-6 text-white" fill="white" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{tVideo(video.descriptionKey)}</h3>
      </div>
    </motion.div>
  );
}

interface NoVideosPlaceholderProps {
  serviceTitle: string;
  tServiceDetail: any;
}

function NoVideosPlaceholder({ tServiceDetail }: NoVideosPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-neutral-100 dark:bg-neutral-800/50 rounded-xl p-8 text-center",
        "border border-dashed border-neutral-300 dark:border-neutral-700",
      )}
    >
      <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <Video className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </div>
      <h3 className="text-xl font-medium mb-2">{tServiceDetail("no_videos_title")}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        {tServiceDetail("no_videos_message")}
      </p>
      <Link href="/contact">
        <Button variant="outline">{tServiceDetail("request_service")}</Button>
      </Link>
    </motion.div>
  );
}
