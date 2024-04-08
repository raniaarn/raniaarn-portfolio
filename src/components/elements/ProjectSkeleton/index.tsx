import { ProjectSkeletonProps } from "@/components/types/projectSkeletonProps";
import Image from "next/image";
export const ProjectSkeleton: React.FC<ProjectSkeletonProps> = ({
  title,
  imageUrl,
  date,
  children,
  summary
}) => {
  return (
    <div className="">
      <div id="home-header" className="pb-20 pt-32 px-8 md:px-32 flex flex-col">
        <Image
          className="shadow-sm rounded-lg items-center mx-auto"
          src={imageUrl}
          alt={imageUrl}
          width={600}
          height={600} >
        </Image>
        <div className="text-white font-semibold text-xl text-center py-4">
          {title}
        </div>
        <div className="text-white text-md text-center">
          {date}
        </div>
      </div>
      <div id="skills" className="bg-white py-6 px-12 md:px-72 text-justify">
        {summary}
      </div>
      <hr className="my-1 border-purple-500" />
      <div className="bg-white py-6 px-12 md:px-72">
        {children}
      </div>
    </div>
  )
}