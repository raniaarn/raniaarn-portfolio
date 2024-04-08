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
    <div id="projects" className="max-w-[450px] h-full flex flex-col p-10 rounded-lg bg-white shadow-lg hover:shadow-blue-200 gap-4">
      <div className="h-full flex flex-col gap-4">
        <Image
          className="shadow-sm rounded-lg items-center"
          src={imageUrl}
          alt={imageUrl}
          width={600}
          height={600} >
        </Image>
        <div className="items-start flex flex-row gap-4">
          {skillsUrls.map((skill) => (
            <Image
              src={skill}
              alt={skill}
              width={30}
              height={30}
            />
          ))}
        </div>
        <div className="items-start font-bold">
          {title}
        </div>
      </div>
      <Link href={`/projects${redirect}`}>
        <Button content='Overview' style='primary' extendClassName="w-full" />
      </Link>
    </div>
  )
}