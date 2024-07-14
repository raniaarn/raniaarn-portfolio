import React from "react";
import { FaCode, FaLaptop, FaListCheck, FaPalette } from "react-icons/fa6";
import { SkillCardProps } from "../../../types/skillCardProps"

export const SKILLS: SkillCardProps[] = [
  {
    icon: <FaLaptop className="text-purple-500 text-3xl" />,
    title: "UI/UX Design",
    description: "Creating Web Design with style guide and foundation."
  },
  {
    icon: <FaPalette className="text-purple-500 text-3xl" />,
    title: "Graphic Design",
    description: "Creating visually attractive design"
  },
  {
    icon: <FaCode className="text-purple-500 text-3xl" />,
    title: "Programming",
    description: "Creating software solutions through coding."
  },
  {
    icon: <FaListCheck className="text-purple-500 text-3xl" />,
    title: "Project Management",
    description: "Manage and coordinate team effectively"
  },
]