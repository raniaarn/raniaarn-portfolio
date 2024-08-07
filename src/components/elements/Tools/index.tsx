import { ToolsItem } from "./ToolsItem"

export const Tools = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-[100%] md:w-[90%] lg:w-[80%] xl:w-[62%] max-w-[760px] pt-8">
      <ToolsItem image='/images/figma.svg' />
      <ToolsItem image='/images/maze.svg' />
      <ToolsItem image='/images/ai.svg' />
      <ToolsItem image='/images/ps.svg' />
      <ToolsItem image='/images/nextjs.svg' />
      <ToolsItem image='/images/html.svg' />
      <ToolsItem image='/images/css.svg' />
      <ToolsItem image='/images/js.svg' />
      <ToolsItem image='/images/django.svg' />
      <ToolsItem image='/images/python.svg' />
      <ToolsItem image='/images/react.svg' />
      <ToolsItem image='/images/springboot.svg' />
    </div>
  )
}