import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import {
  SUMMARY,
  ROLE,
  CONSTRAINTS,
  PLAN,
  EMPATHIZE,
  DEFINE,
  IDEATION,
  PROTOTYPE,
  TESTING
} from '../constants/salingTukarConstants'
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const SalingTukar = () => {
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
    <LayoutComponent metaTitle="SalingTukar" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/salingtukar.png"
        title="SalingTukar: Mobile App Research and Design"
        date="March 2024-present (Ongoing)"
      >
        <div className="flex flex-col gap-6">
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

          {/** CONSTRAINTS */}
          <div className="flex flex-col gap-4 text-justify">
            <div className="font-bold text-purple-500 text-xl">
              {CONSTRAINTS.title}
            </div>
            <div className="text-sm text-black">
              {CONSTRAINTS.description}
            </div>
          </div>

          {/** Research PLAN */}
          <div id="Decks" className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {PLAN.title}
            </div>

            <iframe className="w-4/5 md:w-5/6 h-[300px] mx-auto justify-items-center" src={PLAN.sourcePDF} />

            {/** Research PLAN: Objectives */}
            <div className="flex flex-col gap-2">
              <div className=" font-semibold text-black text-lg">
                {PLAN.objective}
              </div>
              <div className="text-sm text-black">
                <ul className="list-disc pl-8 text-justify">
                  {PLAN.objectives.map((item: any, index: number) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/** Research PLAN: Hypothesis */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {PLAN.hypo}
              </div>
              <div className="text-sm text-black">
                <ul className="list-disc pl-8 text-justify">
                  {PLAN.hypothesis.map((item: any, index: number) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/** Research Plan: Methodology */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {PLAN.methodology}
              </div>
              <div className="text-sm text-black mb-2">
                {PLAN.methodDesc}
              </div>
              <ImageEverywhere imageUrl={PLAN.methodImageURL} />
            </div>
          </div>

          {/** EMPATHIZE */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {EMPATHIZE.title}
            </div>

            {/** EMPATHIZE: affinity mapping */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.affinity}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.affinityDesc}
              </div>
              <ImageEverywhere imageUrl={EMPATHIZE.affinityDocs} />
            </div>


            {/** EMPATHIZE: 4 Whys */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.fourwhy}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.fourwhyDesc}
              </div>
              <ImageEverywhere imageUrl={EMPATHIZE.fourwImageUrl} />
            </div>


            {/** EMPATHIZE: User Persona */}
            <div id="User Persona" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.persona}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.personaDesc}
              </div>
              <ImageEverywhere imageUrl={EMPATHIZE.personaImageUrl} />
            </div>

            {/** EMPATHIZE: User Journey Map */}
            <div id="User Journey Map" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {EMPATHIZE.journey}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.journeyDesc}
              </div>
              {EMPATHIZE.journeyImageUrls.map((item: any, index: number) => (
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
              <div className="text-sm text-black mt-2 mb-2 text-justify">
                {DEFINE.prioDesc}
              </div>
              <ImageEverywhere imageUrl={DEFINE.hmwPrioUrl} />
              <div className="text-sm text-black mt-2 mb-2 text-justify">
                {DEFINE.afterPrioDesc}
              </div>
              <ImageEverywhere imageUrl={DEFINE.hmwafterUrl} />
              <ImageEverywhere imageUrl={DEFINE.featureImgUrl} />
            </div>
          </div>

          {/** IDEATION */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {IDEATION.title}
            </div>

            {/** IDEATION: crazy 8 */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {IDEATION.crazy}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {IDEATION.crazy8Desc}
              </div>
              <ImageEverywhere imageUrl={IDEATION.crazyImgUrl} />
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
            <div id="Flows" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {IDEATION.flow}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {IDEATION.flowDesc}
              </div>
              {IDEATION.flowImgUrls.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** PROTOTYPE */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {PROTOTYPE.title}
            </div>

            {/** PROTOTYPE: Moodboard */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {PROTOTYPE.moodboard}
              </div>
              <ImageEverywhere imageUrl={PROTOTYPE.moodboardImgUrl} />
            </div>

            {/** PROTOTYPE: Design System */}
            <div id="Design System" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {PROTOTYPE.designSystem}
              </div>
              {PROTOTYPE.designSystemImgUrl.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>

            {/** PROTOTYPE: High Fidelity */}
            <div id="Prototype" className="flex flex-col gap-2">
              <div className="font-semibold text-black">
                {PROTOTYPE.prototypeSubtitle}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {PROTOTYPE.prototypeDesc}
              </div>
              {PROTOTYPE.prototypeImgUrl.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** TESTING */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {TESTING.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {TESTING.description}
              </div>
            </div>
          </div>
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}