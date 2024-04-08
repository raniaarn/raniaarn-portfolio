import { ProjectCard, SkillCard, Tools } from "@/components/elements";
import { FaLaptop, FaPalette } from "react-icons/fa6";
import { PROJECTS } from "../constants/projects";

export const ProjectSection = () => {
  return (
    <div data-aos="fade-up" id="projects" className="flex flex-col items-center gap-4 mx-16 my-12">
      <div className="items-center item-center justify-center font-bold text-2xl">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <ProjectCard
              skillsUrls={project.skillsUrls}
              imageUrl={project.imageUrl}
              title={project.title}
              redirect={project.redirect}
            />
          </div>
        ))}
      </div>
      <div className="py-4 items-center mx-auto justify-items-center w-full h-[350px]">
        <div className="text-violet-500 text-center text-lg font-medium py-4">
          Design's Portfolio
        </div>
        <iframe className="w-3/4 md:w-1/2 h-full mx-auto justify-items-center" src="https://drive.google.com/file/d/1HHtwqH6bKcVKdRloNJ95-RkjzXZHZg72/preview" />
      </div>
    </div>
  )
}