import Image from "next/image"

export const ToolsItem: React.FC<ToolItemProps> = ({
  image,
  lastItem = false
}) => {
  return (
    <div className="relative w-10 md:w-20 w-10 md:h-20 aspect-square">
      <Image
        className={`${!lastItem ? "col-span-1" : "col-span-2 md:col-span-1"}`}
        src={image}
        alt={image}
        priority
        fill>
      </Image >
    </div>
  )
}