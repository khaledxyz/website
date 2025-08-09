import { MaxWidth } from "@/components/max-width";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects.data";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function ProjectsSection() {
  const t = useTranslations("homePage.sections.projects");
  return (
    <section>
      <MaxWidth>
        <h2 className="font-serif text-4xl mb-5">{t("title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
            >
              <Card className="py-4 h-full flex flex-col">
                <CardHeader className="px-4 flex-grow">
                  <CardTitle className="text-lg">
                    {t(`items.${project.id}.title`)}
                  </CardTitle>
                  <CardDescription>
                    {t(`items.${project.id}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="px-4 space-x-1 mt-auto">
                  {project.tags.map((tag, index) => (
                    <Badge variant="outline" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
