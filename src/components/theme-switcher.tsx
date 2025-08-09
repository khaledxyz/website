"use client";
import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      title="Toggle Theme"
      variant="outline"
      size="icon"
    >
      <MoonIcon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
