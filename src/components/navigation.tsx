import { LanguageSelector } from "./language-selector";
import { Logo } from "./logo";
import { MaxWidth } from "./max-width";
import { ThemeSwitcher } from "./theme-switcher";

export function Navigation() {
  return (
    <nav>
      <MaxWidth className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center justify-center gap-1">
          <ThemeSwitcher />
          <LanguageSelector />
        </div>
      </MaxWidth>
    </nav>
  );
}
