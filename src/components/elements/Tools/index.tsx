import { ToolsItem } from "./ToolsItem"
import Image from 'next/image'

export const Tools = () => {
  return (
    // <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-[100%] md:w-[90%] lg:w-[80%] xl:w-[62%] max-w-[760px] pt-8">
    //   <ToolsItem image='/images/figma.svg' />
    //   <ToolsItem image='/images/maze.svg' />
    //   <ToolsItem image='/images/ai.svg' />
    //   <ToolsItem image='/images/ps.svg' />
    //   <ToolsItem image='/images/nextjs.svg' />
    //   <ToolsItem image='/images/html.svg' />
    //   <ToolsItem image='/images/css.svg' />
    //   <ToolsItem image='/images/js.svg' />
    //   <ToolsItem image='/images/django.svg' />
    //   <ToolsItem image='/images/python.svg' />
    //   <ToolsItem image='/images/react.svg' />
    //   <ToolsItem image='/images/springboot.svg' />
    // </div>
    <div className="flex flex-col items-center md:flex-row gap-8 md:gap-8 w-[100%] md:w-[80%]">
      <Image
        src="/images/RaniaSkills.png"
        alt="Raniaarn"
        width={600}
        height={600}>
      </Image>
      <div className="w-[100%] md:w-[60%] flex flex-col gap-4 items-center text-left md:items-start">
        <h2 className="text-2xl text-center">
          Get to know <span className="font-bold">Rania</span>
        </h2>
        <div className="text-sm flex flex-col gap-2">
          <p>3 Words that described me: <span className="font-bold">Creative. Empathetic. Resilient.</span></p>
          <p>I'm PASSIONATE about designs, from marketing visuals to human-centered solutions. I've worked in agile tech and academic environments, leading teams of 20-35 members in both formal and informal design-related roles.</p>
        </div>
      </div>
    </div>

  )
}