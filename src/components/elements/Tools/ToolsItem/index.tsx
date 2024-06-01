import Image from "next/image"
import { useMediaQuery } from 'react-responsive';

export const ToolsItem: React.FC<ToolItemProps> = ({
  image,
  lastItem = false
}) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const imageWidth = isMobile ? 40 : 80;

  return (
    <>
      <Image
        className={`${!lastItem ? "col-span-1" : "col-span-2 md:col-span-1"}`}
        src={image}
        alt={image}
        width={imageWidth}
        height={imageWidth}>
      </Image>
    </>
  )
}