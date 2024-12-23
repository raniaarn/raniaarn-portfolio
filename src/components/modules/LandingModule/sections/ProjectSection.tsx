import { ProjectCard } from "@/components/elements";
import { PROJECTS } from "../constants/projects";
import { ProjectSectionProps } from "@/components/types/projectCardProps";

export const ProjectSection: React.FC<ProjectSectionProps> = ({ handleOpen }) => {
  return (
    <div data-aos="fade-up" id="projects" className="flex flex-col items-center gap-4 mx-16 my-12">
      <h2 className="items-center item-center justify-center font-bold text-2xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <>
            <ProjectCard
              key={index}
              skillsUrls={project.skillsUrls}
              imageUrl={project.imageUrl}
              title={project.title}
              redirect={project.redirect}
              redirectOutside={project.redirectOutside}
              lastItem={project.lastItem}
              description={project.description}
              modalId={project.modalId}
              handleOpen={handleOpen}
              top={project.top}
            />
          </>
        ))}

      </div>
      <div id="Design" className="py-4 items-center mx-auto justify-items-center w-full h-[350px]">
        <h3 className="text-violet-500 text-center text-lg font-medium py-4">
          Design's Portfolio
        </h3>
        <iframe className="w-3/4 md:w-1/2 h-full mx-auto justify-items-center" src="https://drive.google.com/file/d/1HHtwqH6bKcVKdRloNJ95-RkjzXZHZg72/preview" />
      </div>
    </div>
  )
}