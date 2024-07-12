import { Button } from "../Button"
import { ProjectCardProps } from "@/components/types/projectCardProps"
import Image from "next/image"
import Link from "next/link"

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  skillsUrls,
  title,
  redirect
}) => {
  return (
    <Link href={`${redirect}`}>
      <div id="Applications" className="max-w-[300px] pb-4 h-full flex flex-col rounded-lg bg-white shadow-lg hover:shadow-blue-200 gap-4">
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
                src={skill}
                alt={skill}
                width={20}
                height={20}
              />
            ))}
          </div>
          <div className="items-start text-sm font-bold">
            {title}
          </div>
        </div>
        <Link href={`${redirect}`} className="px-4 py-0 w-full flex justify-start">
          <Button content='Overview' style='project-card' />
        </Link>
      </div>
    </Link>
  )
}