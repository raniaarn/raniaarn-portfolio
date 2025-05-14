import Image from 'next/image'

export const MeSection = () => {
  return (
    <div data-aos="fade-up" id="Me" className="flex justify-center gap-4 mx-16 my-12">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-12 w-[100%] md:w-[80%]">
        <Image className='w-[100%] sm:w-[60%] md:w-[60%] lg:w-[40%] rounded-xl'
          src="/images/RaniaSkills.png"
          alt="Raniaarn"
          width={400}
          height={400}>
        </Image>
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
          <h2 className="text-2xl text-center font-bold">
            Get to know <span className="text-[#AC71ED] font-bold">Rania</span>!
          </h2>
          <div className="text-sm flex flex-col gap-2">
            <p>3 Words that described me: <span className="font-bold">Creative. Empathetic. Resilient.</span></p>
            <p>I'm <span className='font-bold'>PASSIONATE</span> about designs, from marketing visuals to human-centered solutions. I've worked in agile tech and academic environments, leading teams of 21-35 members in both formal and informal design-related roles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}