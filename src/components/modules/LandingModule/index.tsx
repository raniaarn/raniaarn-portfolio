import dynamic from "next/dynamic";
import AboutMeSection from "./sections/AboutMeSection";
import { SkillSection } from "./sections/SkillSection";
import { ProjectSection } from "./sections/ProjectSection";
import { PROJECTS } from "./constants/projects";
import { useState } from "react";
import { Modal } from "@/components/elements";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const LandingModule = () => {

  const [activeModal, setActiveModal] = useState("");

  const handleOpen = (modalId: string) => {
    setActiveModal(modalId);
  };

  const handleClose = () => {
    setActiveModal("");
  };

  const project = PROJECTS.find((project) => project.modalId === activeModal) || {
    imageUrl: "Image",
    title: "Default Title",
    description: "No description available.",
    skillsUrls: [],
    redirect: [],
    redirectOutside: "False"
  };
  
  return (
    <LayoutComponent metaTitle="Raniaarn" metaDescription="Welcome to Raniaarn's Page">
      <AboutMeSection />
      <SkillSection />
      <ProjectSection handleOpen={handleOpen} />
      {activeModal && <Modal
        modalId={activeModal}
        handleClose={handleClose}
        {...project}
      />}
    </LayoutComponent>
  )
}