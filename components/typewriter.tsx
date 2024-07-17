'use client';
import { TypewriterEffectSmooth } from '@/components/aceternity/typewriter-effect';
import { Button } from '@/components/ui/button';

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Build',
    },
    {
      text: 'awesome',
    },
    {
      text: 'apps',
    },
    {
      text: 'with',
    },
    {
      text: 'Aceternity.',
      className: 'text-primary dark:text-blue-500',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button className="font-semibold">Book a flight</Button>
        <Button className="font-semibold" variant="secondary">
          Learn more
        </Button>
      </div>
    </div>
  );
}
