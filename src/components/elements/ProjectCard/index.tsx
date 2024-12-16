import { ProjectCardProps } from "@/components/types/projectCardProps"
import Image from "next/image"

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  skillsUrls,
  title,
  lastItem,
  modalId,
  handleOpen
}) => {
  return (
    <div id="Applications" className={`max-w-[300px] pb-2 h-full flex flex-col rounded-lg bg-white shadow-lg hover:shadow-blue-200 gap-4 ${lastItem && "md:col-span-2 md:justify-self-center"}`}>
      <Image
        className="shadow-sm items-center"
        src={imageUrl}
        alt={imageUrl}
        width={300}
        height={300} >
      </Image>
      <div className="h-full px-4 flex flex-col gap-4">
        <div className="items-start flex flex-row gap-4">
          {skillsUrls.map((skill) => (
            <Image
              key={skill}
              src={skill}
              alt={skill}
              width={20}
              height={20}
            />
          ))}
        </div>
        <h5 className="items-start text-sm font-semibold">
          {title}
        </h5>
      </div>
      <div className="px-4 w-full flex justify-start">
        <button className={`px-4 mb-2 py-2 bg-gradient-to-b from-violet-400 to-purple-800 hover:bg-gradient-to-b hover:from-purple-300 hover:to-violet-400 rounded-[40px] justify-center items-center gap-2.5 inline-flex`
        }
          onClick={() => handleOpen(modalId)}
        >
          <div className='text-white text-xs font-normal'>
            Overview
          </div>
        </button>
      </div>
    </div>
  )
}