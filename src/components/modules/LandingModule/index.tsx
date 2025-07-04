import dynamic from "next/dynamic";
import AboutMeSection from "./sections/AboutMeSection";
import { SkillSection } from "./sections/SkillSection";
import { ProjectSection } from "./sections/ProjectSection";
import { MeSection } from "./sections/MeSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { PROJECTS } from "./constants/projects";
import { useState } from "react";
import { Modal, ModalSum } from "@/components/elements";
import { SummarySection } from "./sections/SummarySection";
import { SUMMARY } from "./constants/highlights";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const LandingModule = () => {

  const [activeModal, setActiveModal] = useState("");
  const [activeModalSum, setActiveModalSum] = useState("");

  const handleOpen = (modalId: string) => {
    setActiveModal(modalId);
  };

  const handleClose = () => {
    setActiveModal("");
  };

  const handleOpenSum = (modalId: string) => {
    setActiveModalSum(modalId);
  };

  const handleCloseSum = () => {
    setActiveModalSum("");
  };

  const project = PROJECTS.find((project) => project.modalId === activeModal) || {
    imageUrl: "Image",
    title: "Default Title",
    description: "No description available.",
    skillsUrls: [],
    redirect: [],
    redirectOutside: "False"
  };

  const summary = SUMMARY.find((summary) => summary.modalId === activeModalSum) || {
    imageUrl: "Image",
    childImageUrl: [""],
  };

  return (
    <LayoutComponent metaTitle="Raniaarn" metaDescription="Welcome to Raniaarn's Page">
      <AboutMeSection />
      <SkillSection />
      <MeSection />
      <ExpertiseSection />
      <SummarySection handleOpenSum={handleOpenSum} />
      <ProjectSection handleOpen={handleOpen} />
      {activeModal && <Modal
        modalId={activeModal}
        handleClose={handleClose}
        {...project}
      />}
      {activeModalSum && <ModalSum
        modalId={activeModalSum}
        handleCloseSum={handleCloseSum}
        {...summary}
      />}
    </LayoutComponent>
  )
}