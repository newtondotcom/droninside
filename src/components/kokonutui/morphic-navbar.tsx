"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import links from "@/lib/data/links";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export function MorphicNavbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(path);
  };

  return (
    <nav className="mx-auto max-w-4xl px-4 py-2">
      <div className="flex items-center justify-center">
        <div className="glass flex items-center gap-1 rounded-xlbackdrop-blur-md">
          {Object.entries(links).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath = index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <Link
                className={clsx(
                  "flex items-center justify-center bg-black/70 p-1.5 px-4 text-sm text-white transition-all duration-300 dark:bg-white/70 dark:text-black",
                  isActive
                    ? "mx-2 rounded-xl font-semibold text-sm text-primary"
                    : clsx(
                        (isActiveLink(prevPath || "") || isFirst) && "rounded-l-xl",
                        (isActiveLink(nextPath || "") || isLast) && "rounded-r-xl",
                      ),
                )}
                href={path}
                key={path}
                onClick={() => setActivePath(path)}
              >
                {t(name)}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
