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
  TESTING,
  DT,
  CONCLUSION,
  RECOMMENDATION,
  END
} from '../constants/salingTukarConstants'
import Link from "next/link";
import Image from "next/image"

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const SalingTukar = () => {
  const summaryContent = (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-purple-500 text-xl">
          {SUMMARY.title}
        </h2>
        <p className="text-sm">
          {SUMMARY.summary}
        </p>
        <p className="text-sm">
          The Purpose of this App:
        </p>
        <ul className="list-disc pl-8 text-justify">
          {SUMMARY.purpose.map((roleItem, index) => (
            <li className="text-sm" key={index}>
              {roleItem}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold text-black text-lg">
          Navigations to Deliverables
        </h3>
        <div className="text-sm grid items-center grid-cols-4 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div key={index} className="span-col-1">
              <Tags title={item} />
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
    <LayoutComponent metaTitle="SalingTukar" metaDescription="Mobile App Research and Design">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/salingtukar.png"
        title="SalingTukar: Mobile App Research and Design"
        date="March - May 2024"
      >
        <div className="flex flex-col gap-6">
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

          {/** DESIGN THINKING */}
          <div className="flex flex-col gap-4 text-justify">
            <h2 className="font-bold text-purple-500 text-xl">
              {DT.title}
            </h2>
            <p className="text-sm text-black">
              {DT.description}
            </p>
            <ImageEverywhere imageUrl={DT.imageUrl} />
          </div>

          {/** CONSTRAINTS */}
          <div className="flex flex-col gap-4 text-justify">
            <h2 className="font-bold text-purple-500 text-xl">
              {CONSTRAINTS.title}
            </h2>
            <p className="text-sm text-black">
              {CONSTRAINTS.description}
            </p>
          </div>

          {/** Research PLAN */}
          <div id="Decks" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PLAN.title}
            </h2>

            <iframe className="w-4/5 md:w-5/6 h-[300px] mx-auto justify-items-center" src={PLAN.sourcePDF} />

            {/** Research PLAN: Objectives */}
            <div className="flex flex-col gap-2">
              <h3 className=" font-semibold text-black text-lg">
                {PLAN.objective}
              </h3>
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
              <h3 className="font-semibold text-black">
                {PLAN.hypo}
              </h3>
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
              <h3 className="font-semibold text-black">
                {PLAN.methodology}
              </h3>
              <p className="text-sm text-black mb-2">
                {PLAN.methodDesc}
              </p>
              <ImageEverywhere imageUrl={PLAN.methodImageURL} />
            </div>
          </div>

          {/** Research PLAN: Findings */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-black">
              {PLAN.findings}
            </h3>
            {PLAN.findingsList.map((item: any) => (
              <>
                <p className="text-purple-500">
                  {item.title}
                </p>
                <ul className="text-sm list-disc pl-8 text-justify">
                  {item.list.map((point: any) => (
                    <li>
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>


          {/** EMPATHIZE */}
          < div className="flex flex-col gap-4" >
            <h2 className="font-bold text-purple-500 text-xl">
              {EMPATHIZE.title}
            </h2>

            {/** EMPATHIZE: affinity mapping */}
            < div className="flex flex-col gap-2" >
              <h3 className="font-semibold text-black">
                {EMPATHIZE.affinity}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.affinityDesc}
              </p>
              <ImageEverywhere imageUrl={EMPATHIZE.affinityDocs} />
            </div>


            {/** EMPATHIZE: 4 Whys */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {EMPATHIZE.fourwhy}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.fourwhyDesc}
              </p>
              <ImageEverywhere imageUrl={EMPATHIZE.fourwImageUrl} />
              <ImageEverywhere imageUrl={EMPATHIZE.fourwImageUrl2} />

            </div>


            {/** EMPATHIZE: User Persona */}
            <div id="User Persona" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {EMPATHIZE.persona}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.personaDesc}
              </p>
              <ImageEverywhere imageUrl={EMPATHIZE.personaImageUrl} />
            </div>

            {/** EMPATHIZE: User Journey Map */}
            <div id="Journey Map" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {EMPATHIZE.journey}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {EMPATHIZE.journeyDesc}
              </p>
              <ImageEverywhere imageUrl={EMPATHIZE.journeyImageUrl} />
            </div>
          </div>


          {/** DEFINE */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DEFINE.title}
            </h2>

            {/** DEFINE: How Might We */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {DEFINE.hmw}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {DEFINE.hmwdesc}
              </p>
              <ImageEverywhere imageUrl={DEFINE.hmwImageUrl} />
              <ImageEverywhere imageUrl={DEFINE.hmwImageUrl2} />
              <p className="text-sm text-black mt-2 mb-2 text-justify">
                {DEFINE.prioDesc}
              </p>
              <ImageEverywhere imageUrl={DEFINE.hmwPrioUrl} />
              <p className="text-sm text-black mt-2 mb-2 text-justify">
                {DEFINE.afterPrioDesc}
              </p>
              <ImageEverywhere imageUrl={DEFINE.hmwafterUrl} />
              <ImageEverywhere imageUrl={DEFINE.featureImgUrl} />
            </div>
          </div>

          {/** IDEATION */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {IDEATION.title}
            </h2>

            {/** IDEATION: crazy 8 */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {IDEATION.crazy}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {IDEATION.crazy8Desc}
              </p>
              {IDEATION.crazyImgUrls.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>

            {/** IDEATION: IA */}
            <div id="Sitemap (IA)" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {IDEATION.ia}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {IDEATION.iaDesc}
              </p>
              <ImageEverywhere imageUrl={IDEATION.iaImgUrl} />
            </div>

            {/** IDEATION: Flows */}
            <div id="Flows" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {IDEATION.flow}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {IDEATION.flowDesc}
              </p>
              {IDEATION.flowImgUrls.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** PROTOTYPE */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PROTOTYPE.title}
            </h2>

            {/** PROTOTYPE: Moodboard */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {PROTOTYPE.moodboard}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {PROTOTYPE.moodboardDesc}
              </p>
              <ImageEverywhere imageUrl={PROTOTYPE.moodboardImgUrl} />
            </div>

            {/** PROTOTYPE: Design System */}
            <div id="Design System" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {PROTOTYPE.designSystem}
              </h3>
              {PROTOTYPE.designSystemList.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-sm text-black mb-2 text-justify">
                    {item.desc}
                  </p>
                  <ImageEverywhere imageUrl={item.imageUrl} />
                </div>
              ))}
            </div>

            {/** PROTOTYPE: High Fidelity */}
            <div id="UI" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {PROTOTYPE.prototypeSubtitle}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {PROTOTYPE.prototypeDesc}
              </p>
              {PROTOTYPE.prototypeImgUrl.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>

          {/** TESTING */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {TESTING.title}
            </h2>

            <div id="Test Plan" className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {TESTING.preparation}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.preparationDesc}
              </p>
              <ul className="text-sm list-disc pl-8 text-justify">
                {TESTING.preparationList.map((point: any, index: number) => (
                  <li key={index}>
                    <span className="font-bold">{point.title}</span> {point.child}
                  </li>
                ))}
              </ul>
            </div>

            <div id="Testing Result" className="flex flex-col gap-2 mb-4">
              <h3 className="font-semibold text-black">
                {TESTING.result}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.resultDesc}
              </p>
              <ImageEverywhere imageUrl={TESTING.resultImgUrl} />
              <Link href={TESTING.mazeUrl} target="blank">
                <Button style="primary" content="Maze Report" extendClassName="w-full" />
              </Link>
            </div>

            <div id="Redesign" className="flex flex-col gap-4">
              <h3 className="font-semibold text-black">
                {TESTING.issue}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.issueDesc}
              </p>

              <h3 className="text-sm text-purple-500 font-semibold">
                {TESTING.issuesRent}
              </h3>
              {TESTING.issuesRentList.map((item: any, index: number) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-black mb-2 text-justify">
                    {item.subtitle}
                  </h4>
                  <ImageEverywhere imageUrl={item.imageUrl} />
                  <p className="text-sm text-black mb-2 text-justify">
                    {item.desc}
                  </p>
                  <p className="text-sm text-black mb-2 text-justify">
                    {item.justify}
                  </p>
                  <ImageEverywhere imageUrl={item.redesign} />
                </div>
              ))}

              <h3 className="text-sm text-purple-500 font-semibold">
                {TESTING.issuesTracker}
              </h3>
              {TESTING.issuesTrackerList.map((item: any, index: number) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-black mb-2 text-justify">
                    {item.subtitle}
                  </h4>
                  <ImageEverywhere imageUrl={item.imageUrl} />
                  <p className="text-sm text-black mb-2 text-justify">
                    {item.desc}
                  </p>
                  <ImageEverywhere imageUrl={item.redesign} />
                </div>
              ))}

              <h3 className="text-sm text-purple-500 font-semibold">
                {TESTING.issuesRating.title}
              </h3>
              <ImageEverywhere imageUrl={TESTING.issuesRating.imageUrl} />
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.issuesRating.desc}
              </p>
              <ImageEverywhere imageUrl={TESTING.issuesRating.redesign} />

              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.newAdditionDesc}
              </p>

              {TESTING.newAdditionImgUrls.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
              <p className="text-sm text-black mb-2 text-justify">
                {TESTING.conclude}
              </p>
              <iframe height={385} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNj4SADnHohHJEh0SeSiYDy%2FDesign%3Fpage-id%3D796%253A60%26type%3Ddesign%26node-id%3D817-18367%26viewport%3D1555%252C-115%252C0.23%26t%3D6AMNlp8X3lGqxqIW-1%26scaling%3Dscale-down%26starting-point-node-id%3D817%253A18348%26mode%3Ddesign" allowFullScreen></iframe>

              <iframe id="Prototype" className="h-[160px] md:h-[385px]" src="https://www.youtube.com/embed/612JMNAU1Jw?si=Ejn3y3hVVPe9CaLp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>

          </div>

          {/** CONCLUSION */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {CONCLUSION.title}
            </h2>
            <p className="text-sm text-black mb-2 text-justify">
              {CONCLUSION.desc}
            </p>
          </div>

          {/** RECOMMENDATION */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {RECOMMENDATION.title}
            </h2>
            <p className="text-sm text-black mb-2 text-justify">
              {RECOMMENDATION.desc}
            </p>
          </div>

          {/** END */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {END.title}
            </h2>
            <div className="text-sm text-black mb-2 text-justify">
              {END.desc.map((item: any, index: number) => (
                <p key={index} className="text-sm text-black mb-2 text-justify">
                  {item}
                </p>
              ))}
            </div>
            <Image
              className="mx-auto items-center"
              src='/images/salingtukar/closing.png'
              alt="Bye!"
              width={100}
              height={100}
            >
            </Image>
          </div>

        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}