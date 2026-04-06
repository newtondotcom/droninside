"use client";
import links from "@/lib/data/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { siGithub, siInstagram, siBluesky } from "simple-icons";
import { useTranslations } from "next-intl";

const Footer = () => {
  const pathname = usePathname();
  const tNav = useTranslations("Navigation");
  const tCommon = useTranslations("Common");

  if (pathname === "/") {
    return <></>;
  }

  const socialLinks = [
    {
      href: "https://instagram.com/droninside",
      label: "Instagram",
      icon: <Instagram />,
    },
    {
      href: "https://www.linkedin.com/in/robin-augereau/",
      label: "LinkedIn",
      icon: <LinkedIn />,
    },
    {
      href: "https://github.com/newtondotcom/droninside",
      label: "GitHub",
      icon: <Github />,
    },
    {
      href: "https://bsky.app/profile/droninside.bsky.social",
      label: "Blueksy",
      icon: <Bluesky />,
    },
  ];

  return (
    <footer className="flex flex-col snap-none snap-align-none">
      <Separator />
      <div className="mx-auto max-w-5xl mt-4 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          {tCommon("footer_description")}
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {Object.entries(links).map(([path, { name }], index) => (
            <li key={index}>
              <Link href={path}>
                <button
                  className={cn(
                    `text-gray-400 transition hover:text-primary`,
                    pathname === path ? "text-primary/60" : "",
                  )}
                >
                  {tNav(name)}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center text-primary">{tCommon("made_from")}</div>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-primary"
                aria-label={label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  {icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

function LinkedIn() {
  return (
    <>
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </>
  );
}

function Github() {
  const path = siGithub.path;
  return <path d={path} />;
}

function Instagram() {
  const path = siInstagram.path;
  return <path d={path} />;
}

function Bluesky() {
  const path = siBluesky.path;
  return <path d={path} />;
}
