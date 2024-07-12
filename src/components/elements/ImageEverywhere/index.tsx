import Image from "next/image"

export const ImageEverywhere: React.FC<ImageEverywhereProps> = ({ imageUrl, size }) => {
  return (
    <>
      <Image
        className={`px-8 my-4 shadow-sm rounded-lg mx-auto items-center ${!size ? 'w-full' : `w-[${size}px]`}`}
        src={imageUrl}
        alt={imageUrl}
        width={size || 600}
        height={size || 600} >
      </Image>
    </>
  )
}