import { SkillCardProps } from "@/components/types/skillCardProps"

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div id="skills" className="max-w-[320px] w-full h-[260px] md:h-full flex flex-col shadow-blue-100 p-10 rounded-lg bg-white shadow-lg hover:shadow-xl hover:shadow-violet-200 gap-6">
      <div className="flex-col flex gap-4">
        {icon}
        <h5 className="font-bold">
          {title}
        </h5>
      </div>
      <p className="text-slate-500">
        {description}
      </p>
    </div>
  )
}