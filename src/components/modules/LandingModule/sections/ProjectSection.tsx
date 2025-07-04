import { ProjectCard } from "@/components/elements";
import { PROJECTS } from "../constants/projects";
import { ProjectSectionProps } from "@/components/types/projectCardProps";

export const ProjectSection: React.FC<ProjectSectionProps> = ({ handleOpen }) => {
  return (
    <div data-aos="fade-up" id="Summary" className="flex flex-col items-center gap-4 mx-16 my-12">
      <h2 id="Case Study" className="items-center item-center text-center justify-center font-bold text-2xl pt-8">
        Explore More Projects
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