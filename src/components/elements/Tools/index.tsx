import { ToolsItem } from "./ToolsItem"

export const Tools = () => {
  return (
    <div className='flex flex-col gap-16 justify-center items-center pt-8'>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-16">
          <ToolsItem image='/images/figma.svg'/>
          <ToolsItem image='/images/ai.svg'/>
          <ToolsItem image='/images/ps.svg'/>
          <ToolsItem image='/images/nextjs.svg'/>
          <ToolsItem image='/images/html.svg'/>
          <ToolsItem image='/images/css.svg'/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-16 justify-items-center">
          <ToolsItem image='/images/js.svg'/>
          <ToolsItem image='/images/django.svg'/>
          <ToolsItem image='/images/python.svg'/>
          <ToolsItem image='/images/react.svg'/> 
          <ToolsItem lastItem={true} image='/images/springboot.svg'/>
      </div>
    </div>
  )
}