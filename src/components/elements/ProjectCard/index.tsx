import { Button } from "../Button"
import { ProjectCardProps } from "@/components/types/projectCardProps"
import Image from "next/image"
import Link from "next/link"

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  skillsUrls,
  title,
  redirect,
  redirectOutside
}) => {
  return (
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
              key={skill}
              src={skill}
              alt={skill}
              width={20}
              height={20}
            />
          ))}
        </div>
        <h5 className="items-start text-sm font-bold">
          {title}
        </h5>
      </div>
      <Link href={`${redirect}`} target={redirectOutside ? "_blank" : "_self"} className="px-4 py-0 w-full flex justify-start">
        <Button content='Overview' style='project-card' />
      </Link>
    </div>
  )
}