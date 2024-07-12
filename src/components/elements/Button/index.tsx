export const Button: React.FC<ButtonProps> = ({
  style,
  content,
  extendClassName = '',
}) => {
  if (style === "primary") {
    return (
      <button className={`h-10 px-8 py-2 bg-gradient-to-b from-violet-400 to-purple-800 hover:bg-gradient-to-b hover:from-purple-300 hover:to-violet-400 rounded-[40px] justify-center items-center gap-2.5 inline-flex ${extendClassName}`}>
        <div className='text-white text-xs md:text-base font-semibold md:font-normal'>
          {content}
        </div>
      </button>
    )
  } else if (style === "outline-light") {
    return (
      <button className={`h-10 px-8 py-2 rounded-[40px] border-2 border-violet-400 hover:border-violet-200 justify-center items-center gap-2.5 inline-flex ${extendClassName}`}>
        <div className='text-violet-400 text-xs font-semibold md:text-base md:font-normal'>
          {content}
        </div>
      </button>
    )
  } else if (style === "project-card") {
    return (
      <button className={`px-4 mb-2 py-2 bg-gradient-to-b from-violet-400 to-purple-800 hover:bg-gradient-to-b hover:from-purple-300 hover:to-violet-400 rounded-[40px] justify-center items-center gap-2.5 inline-flex ${extendClassName}`}>
        <div className='text-white text-xs font-normal'>
          {content}
        </div>
      </button>
    )
  }
  else {
    return (
      <button className={`h-10 px-8 py-2 rounded-[40px] border-2 border-violet-400 hover:border-violet-200 justify-center items-center gap-2.5 inline-flex ${extendClassName}`}>
        <div className='text-white text-xs font-semibold md:text-base md:font-normal'>
          {content}
        </div>
      </button>
    )
  }

}