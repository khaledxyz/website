"use client";
import { MoonIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const t = useTranslations("common");
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      title={t("toggleThemeTooltip")}
      variant="outline"
      size="icon"
    >
      <MoonIcon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
