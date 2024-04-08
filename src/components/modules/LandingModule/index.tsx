import dynamic from "next/dynamic";
import AboutMeSection from "./sections/AboutMeSection";
import { SkillSection } from "./sections/SkillSection";
import { ProjectSection } from "./sections/ProjectSection";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const LandingModule = () => {
  return (
    <LayoutComponent metaTitle="Raniaarn" metaDescription="Welcome to Raniaarn's Page">
        <AboutMeSection />
        <SkillSection />
        <ProjectSection />
    </LayoutComponent>
  )
}