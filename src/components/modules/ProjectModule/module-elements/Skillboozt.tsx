import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import {
  SUMMARY,
  ROLE,
  DECK,
  CANVAS,
  INTRO,
  RESEARCH,
  PERSONA,
  JOURNEY,
  DESIGN,
  TESTING,
} from '../constants/skillBooztConstants'
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const SkillBoozt = () => {
  const summaryContent = (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-purple-500 text-xl">
          {SUMMARY.title}
        </div>
        <div className="text-sm">
          {SUMMARY.summary}
        </div>
        <div className="font-semibold text-black text-lg">
          Navigations to Deliverables
        </div>
        <div className="text-sm grid items-center grid-cols-4 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div className="span-col-1">
              <Tags key={index} title={item} />
            </div>
          ))}
        </div>
        <div className="font-semibold text-black text-lg">
          Links to Docs
        </div>
        <div className='flex-row flex gap-4 w-full justify-start'>
          <Link href={SUMMARY.Documentation} target="blank">
            <Button content='Documentation' style='primary' />
          </Link>
          <Link href={SUMMARY.Prototype} target="blank">
            <Button content='Prototype' style='outline-light' />
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="SkillBoozt" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/skillboozt.png"
        title="SkillBoozt: Mobile App Research and Design"
        date="June 2023"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {ROLE.title}
            </div>
            <div className="text-black">
              <ul className="list-disc pl-8 text-justify">
                {ROLE.roles.map((roleItem, index) => (
                  <li className="text-sm" key={index}>
                    {roleItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/** Decks */}
          <div id="Decks" className="flex flex-col gap-4 text-justify">
            <div className="font-bold text-purple-500 text-xl">
              {DECK.title}
            </div>
            <Link href={DECK.srcPDF} target="blank">
              <button className='h-10 w-full px-8 py-2 bg-gradient-to-b from-violet-400 to-purple-800 hover:bg-gradient-to-b hover:from-purple-300 hover:to-violet-400 rounded-[40px] justify-center items-center gap-2.5 inline-flex'>
                <div className='text-white'>
                  Presentation Deck
                </div>
              </button>
            </Link>
          </div>

          {/** Canvas */}
          <div id="Exploration Canvas" className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {CANVAS.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {CANVAS.description}
              </div>
              {CANVAS.imageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Introduction */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {INTRO.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {CANVAS.description}
              </div>
              {INTRO.sections.map((item) => (
                <>
                  <div className="font-semibold text-black">
                    {item.title}
                  </div><div className="text-black">
                    <ul className="list-disc text-sm pl-8 text-justify">
                      {item.list.map((roleItem, index) => (
                        <li key={index}>
                          {roleItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/** Research */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {RESEARCH.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black text-justify">
                {RESEARCH.description}
              </div>
            </div>
          </div>

          {/** Persona */}
          <div id="User Persona" className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {PERSONA.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black text-justify">
                {PERSONA.description}
              </div>
              {PERSONA.imageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Journey Map */}
          <div id="User Journey Map" className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {JOURNEY.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black text-justify">
                {JOURNEY.description}
              </div>
              <ImageEverywhere imageUrl={JOURNEY.flowImgUrl} />
              <div className="text-sm text-black text-justify">
                {JOURNEY.description2}
              </div>
              <ImageEverywhere imageUrl={JOURNEY.journeyImgUrl} />
            </div>
          </div>

          {/** Design */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {DESIGN.title}
            </div>

            {/** Design: IA */}
            <div id="Sitemap (IA)" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {DESIGN.ia}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {DESIGN.iaDesc}
              </div>
              <ImageEverywhere imageUrl={DESIGN.iaImageUrl} />
            </div>

            {/** Design: wireframe */}
            <div id="Wireframe" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {DESIGN.wireframe}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {DESIGN.wireframeDesc}
              </div>
              <ImageEverywhere imageUrl={DESIGN.wireframeImageUrl} />
            </div>

            {/** Design: Prototype */}
            <div id="Prototype" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {DESIGN.prototype}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {DESIGN.prototypeDesc}
              </div>
              {DESIGN.prototypeImageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Testing */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {TESTING.title}
            </div>

            <div id="Evaluation" className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {TESTING.description}
              </div>
              <ImageEverywhere imageUrl={TESTING.imageUrl} />
            </div>

            {/** SUS */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {TESTING.sus}
              </div>
              <div className="text-sm text-black mb-2">
                {TESTING.susDesc}
              </div>
            </div>

          </div>
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}