import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import {
  SUMMARY,
  ROLE,
  RESEARCH,
  EMPATHIZE,
  DEFINE,
  IDEATION,
  PROTOTYPE,
  TESTING,
  DECK
} from '../constants/bansourceConstants'
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Bansource = () => {
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
          <Link href={SUMMARY.Guidebook} target="blank">
            <Button content='Guidebook' style='primary' />
          </Link>
          <Link href={SUMMARY.Prototype}>
            <Button content='Prototype' style='outline-light' />
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="Bansource" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/bansource.png"
        title="Bansource: Mobile and Desktop App Research and Design"
        date="August 2023"
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
              <Button style="primary" content="Canva's Deck" extendClassName="w-full" />
            </Link>
          </div>

          {/** Research */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {RESEARCH.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black">
                {RESEARCH.description}
                <ImageEverywhere imageUrl={RESEARCH.imageUrl} />
              </div>
            </div>
          </div>

          {/** Empathize */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {EMPATHIZE.title}
            </div>

            {/** Empathize: Empathy mapping */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.empathy}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.empathyDesc}
              </div>
              <ImageEverywhere imageUrl={EMPATHIZE.empathyImageUrl} />
            </div>

            {/** Empathize: User Persona */}
            <div id="User Persona" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.persona}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.personaDesc}
              </div>
              {EMPATHIZE.personaImageUrl.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>

            {/** Empathize: User Journey Map */}
            <div id="User Journey Map" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.journey}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.journeyDesc}
              </div>
              {EMPATHIZE.journeyImageUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>


          {/** DEFINE */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {DEFINE.title}
            </div>

            {/** DEFINE: How Might We */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {DEFINE.hmw}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {DEFINE.hmwdesc}
              </div>
              <ImageEverywhere imageUrl={DEFINE.hmwImageUrl} />
            </div>
          </div>

          {/** Ideation */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {IDEATION.title}
            </div>

            {/** IDEATION: IA */}
            <div id="Sitemap (IA)" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {IDEATION.ia}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {IDEATION.iaDesc}
              </div>
              <ImageEverywhere imageUrl={IDEATION.iaImgUrl} />
            </div>

            {/** IDEATION: Flows */}
            <div className="flex flex-col gap-2">
              <div id="Userflow" className="font-semibold text-black">
                {IDEATION.flow}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {IDEATION.flowDesc}
              </div>
              {IDEATION.flowImgUrls.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>


            {/** IDEATION: Wireframe */}
            <div id="Wireframe" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {IDEATION.wireframe}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {IDEATION.wireframeDesc}
              </div>
              <ImageEverywhere imageUrl={IDEATION.wireframeImageUrl} />
            </div>
          </div>

          {/** Prototype */}
          <div id="Prototype" className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {PROTOTYPE.title}
            </div>

            {/** PROTOTYPE: High Fidelity */}
            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {PROTOTYPE.Description}
              </div>
              {PROTOTYPE.prototypeImgUrl.map((item, index) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** Testing */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {TESTING.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {TESTING.description}
                <ImageEverywhere imageUrl={TESTING.imageUrl} />
              </div>
            </div>
          </div>
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}