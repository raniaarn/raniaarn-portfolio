import Image from "next/image"

export const ToolsItem: React.FC<ToolItemProps> = ({
image,
lastItem= false
}) => {
  return (
    <>
      <Image
        className={`${!lastItem ? "col-span-1" : "col-span-2 md:col-span-1"}`}
        src={image}
        alt={image}
        width={80}
        height={80}>
      </Image>
    </>
  )
}