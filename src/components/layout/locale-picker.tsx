"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { useTransition } from "react";
import type { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export default function LocalePicker() {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const onChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Select value={locale} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "min-w-[60px] border-none backdrop-blur-md bg-white/10 dark:bg-dark/10",
          isPending && "pointer-events-none opacity-60",
        )}
      >
        <Languages className="size-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[60px]">
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
