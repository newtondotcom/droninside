'use client';
import { Navbar } from '@/components/navbar';
import { ContainerScroll } from '@/components/container-scroll-animation';
import { FeaturesSectionDemo } from '@/components/bento-grid';
import { TypewriterEffectSmoothDemo } from '@/components/typewriter';

export default function Home() {
  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
        <FeaturesSectionDemo />
      </div>
      <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
        <TypewriterEffectSmoothDemo />
      </div>
      <div>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold dark:text-black text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <video
            src={`/video.mp4`}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
