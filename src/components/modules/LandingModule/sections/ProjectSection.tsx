import { ProjectCard } from "@/components/elements";
import { PROJECTS } from "../constants/projects";
import { ProjectSectionProps } from "@/components/types/projectCardProps";

export const ProjectSection: React.FC<ProjectSectionProps> = ({ handleOpen }) => {
  return (
    <div data-aos="fade-up" id="Summary" className="flex flex-col items-center gap-4 mx-16 my-12">
      <h3 className="items-center item-center justify-center font-bold text-2xl">
        Summary
      </h3>
      <div id="Design" className="pb-4 items-center justify-center justify-items-center w-full min-w-[328px] h-[350px]">
        <iframe className="w-3/4 md:w-1/2 h-full mx-auto justify-items-center" src="https://drive.google.com/file/d/1cpP246xvzF6_v6yqHO-s6fUhJAym93GX/preview" />
      </div>
      <h2 id="Case Study" className="items-center item-center text-center justify-center font-bold text-2xl pt-8">
        Selected Projects
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

    </div>
  )
}