"use client";
import { MaxWidth } from "@/components/max-width";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials.data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AboutSection() {
  const [, copy] = useCopyToClipboard();
  const t = useTranslations("homePage.sections.about");

  return (
    <section>
      <MaxWidth className="flex items-center justify-between">
        <div>
          <div className="mb-5">
            <Badge variant="outline" className="mb-4">
              👋 {t("greeting")}
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              {t("intro")}{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t("name")}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light font-serif">
              {t("role")}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80 font-light max-w-xl">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-1 ">
              <Link
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
                href={socials.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </Link>
              <Link
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
                href={socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </Link>
              <Button
                size="icon"
                variant="outline"
                onClick={() => copy(socials.email.href)}
              >
                <MailIcon />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
