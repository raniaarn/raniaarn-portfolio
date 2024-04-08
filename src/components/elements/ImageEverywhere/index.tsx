import Image from "next/image"

export const ImageEverywhere: React.FC<ImageEverywhereProps> = ({ imageUrl }) => {
  return (
    <>
      <Image
        className="w-full px-8 my-4 shadow-sm rounded-lg mx-auto items-center"
        src={imageUrl}
        alt={imageUrl}
        width={600}
        height={600} >
      </Image>
    </>
  )
}