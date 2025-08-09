import { Fragment } from "react";
import { AboutSection } from "./_components/about-section";
import { ProjectsSection } from "./_components/projects-section";
import { TechnologiesSection } from "./_components/technologies-section";

export default function HomePage() {
  return (
    <Fragment>
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
    </Fragment>
  );
}
