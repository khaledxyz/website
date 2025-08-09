import { MaxWidth } from "@/components/max-width";
import { technologies } from "@/data/technologies.data";
import { useTranslations } from "next-intl";

export function TechnologiesSection() {
  const t = useTranslations("homePage.sections.technologies");

  return (
    <section>
      <MaxWidth>
        <h2 className="font-serif text-4xl mb-5">{t("title")}</h2>

        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <div
              dir="ltr"
              key={tech.name}
              className={`group flex items-center ar: gap-2 p-2 rounded border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-current hover:bg-current/10 cursor-pointer ${tech.color}`}
            >
              <i
                className={`${tech.icon} transition-colors duration-200 group-hover:text-current`}
              />
              <span className="text-xs font-medium font-mono text-muted-foreground group-hover:text-current transition-colors duration-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
