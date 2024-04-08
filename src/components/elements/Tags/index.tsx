import Link from "next/link";

export const Tags: React.FC<TagsProps> = ({
  title
}) => {
  return (
    <Link href={`#${title}`}>
      <div id="skills" className="w-full h-14 md:h-10 p-3 bg-violet-200 rounded-3xl hover:bg-purple-200 justify-center items-center inline-flex text-center">
        <div className="text-xs">
          {title}
        </div>
      </div>
    </Link>
  )
}