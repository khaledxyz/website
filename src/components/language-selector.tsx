"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/config/languages.config";
import { setLanguage } from "@/i18n/set-language";
import { LanguagesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function LanguageSelector() {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          title={t("common.changeLanguageTooltip")}
        >
          <LanguagesIcon />
          <span className="sr-only">{t("common.changeLanguageTooltip")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("common.language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((language) => (
          <DropdownMenuItem
            onClick={() => setLanguage(language.id)}
            key={language.id}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
