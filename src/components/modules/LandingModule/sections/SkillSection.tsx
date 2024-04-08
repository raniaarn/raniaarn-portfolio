import { SkillCard, Tools } from "@/components/elements";
import { FaLaptop, FaPalette } from "react-icons/fa6";

export const SkillSection = () => {
  return (
    <div data-aos="fade-up" id="skills" className=" h-full flex flex-col items-center gap-4 mx-16 my-12">
      <div className="items-center item-center justify-center font-bold text-2xl">
        Skills and Tools
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full items-center md:flex-row bg-white gap-8">
        <SkillCard
          icon={<FaPalette className="text-purple-500 text-3xl" />}
          title="Graphic Design"
          description="Creating visually attractives design" />
        <SkillCard
          icon={<FaLaptop className="text-purple-500 text-3xl" />}
          title="UI/UX Design"
          description="Creating Web Design with style guide and fondation." />
        <SkillCard
          icon={<FaPalette className="text-purple-500 text-3xl" />}
          title="Programming"
          description="Creating software solutions through coding for applications." />
      </div>
      <Tools />
    </div>
  )
}