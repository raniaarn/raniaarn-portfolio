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
        <h2 className="font-bold text-purple-500 text-xl">
          {SUMMARY.title}
        </h2>
        <p className="text-sm">
          {SUMMARY.summary}
        </p>
        <h3 className="font-semibold text-black text-lg">
          Navigations to Deliverables
        </h3>
        <div className="text-sm grid items-center grid-cols-4 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div className="span-col-1">
              <Tags key={index} title={item} />
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-black text-lg">
          Links to Docs
        </h3>
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
            <h2 className="font-bold text-purple-500 text-xl">
              {ROLE.title}
            </h2>
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
            <h2 className="font-bold text-purple-500 text-xl">
              {DECK.title}
            </h2>
            <Link href={DECK.srcPDF} target="blank">
              <Button content="Link To Presentation" style="primary" extendClassName="w-full" />
            </Link>
          </div>

          {/** Canvas */}
          <div id="Exploration Canvas" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {CANVAS.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {CANVAS.description}
              </p>
              {CANVAS.imageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Introduction */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {INTRO.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {CANVAS.description}
              </p>
              {INTRO.sections.map((item) => (
                <>
                  <h3 className="font-semibold text-black">
                    {item.title}
                  </h3>
                  <div className="text-black">
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
            <h2 className="font-bold text-purple-500 text-xl">
              {RESEARCH.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black text-justify">
                {RESEARCH.description}
              </p>
            </div>
          </div>

          {/** Persona */}
          <div id="User Persona" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PERSONA.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black text-justify">
                {PERSONA.description}
              </p>
              {PERSONA.imageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Journey Map */}
          <div id="User Journey Map" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {JOURNEY.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black text-justify">
                {JOURNEY.description}
              </p>
              <ImageEverywhere imageUrl={JOURNEY.flowImgUrl} />
              <p className="text-sm text-black text-justify">
                {JOURNEY.description2}
              </p>
              <ImageEverywhere imageUrl={JOURNEY.journeyImgUrl} />
            </div>
          </div>

          {/** Design */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DESIGN.title}
            </h2>

            {/** Design: IA */}
            <div id="Sitemap (IA)" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {DESIGN.ia}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {DESIGN.iaDesc}
              </p>
              <ImageEverywhere imageUrl={DESIGN.iaImageUrl} />
            </div>

            {/** Design: wireframe */}
            <div id="Wireframe" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {DESIGN.wireframe}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {DESIGN.wireframeDesc}
              </p>
              <ImageEverywhere imageUrl={DESIGN.wireframeImageUrl} />
            </div>

            {/** Design: Prototype */}
            <div id="Prototype" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {DESIGN.prototype}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {DESIGN.prototypeDesc}
              </p>
              {DESIGN.prototypeImageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Testing */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {TESTING.title}
            </h2>

            <div id="Evaluation" className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.description}
              </p>
              <ImageEverywhere imageUrl={TESTING.imageUrl} />
            </div>

            {/** SUS */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {TESTING.sus}
              </h3>
              <p className="text-sm text-black mb-2">
                {TESTING.susDesc}
              </p>
            </div>

          </div>
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}