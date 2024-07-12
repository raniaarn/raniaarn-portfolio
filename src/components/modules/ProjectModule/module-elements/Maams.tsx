import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import {
  SUMMARY,
  ROLE,
  DOCUMENTATION,
  AGILE,
  PRASPRINT,
  SPRINTPLANNING,
  DAILYSCRUM,
  REVIEW,
  AWARDS,
  DECK
} from '../constants/maamsConstants';
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Maams = () => {
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
          Navigations
        </h3>
        <div className="text-sm grid items-center grid-cols-3 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div className="span-col-1">
              <Tags key={index} title={item} />
            </div>
          ))}
        </div>
        <div className='flex-row flex gap-4 w-full justify-start'>
          <Link href={SUMMARY.prototype} target="blank">
            <Button content='Prototype' style='primary' />
          </Link>
          <Link href={SUMMARY.repository} target="blank">
            <Button content='Repository' style='outline-light' />
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="MAAMS" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/maams.png"
        title="MAAMS: Analysis Validator Website"
        date="February - June 2024"
      >
        <div className="flex flex-col gap-8">

          { /** AWARD */}
          <div id="Awards" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {AWARDS.title}
            </h2>
            <p className="text-sm text-black mb-2 text-justify">
              {AWARDS.description}
            </p>
            <ImageEverywhere imageUrl={AWARDS.imageUrl} />
          </div>

          { /** ROLES */}
          <div id="Roles" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {ROLE.title}
            </h2>
            <p className="text-sm text-black mb-2 text-justify">
              {ROLE.description}
            </p>
            <div className="text-black">
              <ul className="list-disc pl-8 text-justify">
                {ROLE.list.map((roleItem, index) => (
                  <li className="text-sm" key={index}>
                    {roleItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          { /** PITCHDECK */}
          <div id="Deck" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DECK.title}
            </h2>
            <iframe className="w-4/5 md:w-5/6 h-[300px] mx-auto justify-items-center" src={DECK.slide} />
            <iframe className="w-[100%] mx-auto h-[385px] md:h-[385px] sm:h-[160px]" src="https://www.youtube.com/embed/i9YhQCxn04w?si=8zNyo6TTObuOtk-F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>

          { /** Documentation */}
          <div id="Articles" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DOCUMENTATION.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {DOCUMENTATION.description}
              </p>
              <Link href={DOCUMENTATION.documentation} target="blank">
                <Button style="primary" content="Articles" extendClassName="w-full" />
              </Link>
            </div>
          </div>


          { /** Agile */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {AGILE.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {AGILE.description}
              </p>
            </div>
          </div>

          {/** Prasprint */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PRASPRINT.title}
            </h2>
            {PRASPRINT.sections.map((item) => (
              <div id={item.title} className="text-black flex flex-col gap-2">
                <h3 className="font-semibold text-black">
                  {item.title}
                </h3>
                {(item.description).map((descriptions) => (
                  <p className="text-sm text-black mb-2 text-justify">
                    {descriptions}
                  </p>
                ))}
                {(item.urlImage).map((urls) => (
                  <div className="text-sm text-black mb-2 text-justify">
                    <ImageEverywhere imageUrl={urls} />
                  </div>
                ))}
              </div>
            ))}
          </div>


          { /** Sprint Planning */}
          <div id="PBIs" className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {SPRINTPLANNING.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {SPRINTPLANNING.description}
              </p>
              <ImageEverywhere imageUrl={SPRINTPLANNING.imageUrl} />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {SPRINTPLANNING.description2}
              </p>
              {SPRINTPLANNING.imageUrls_2.map((item: any, index: number) => (
                <ImageEverywhere key={index} imageUrl={item} />
              ))}
            </div>
          </div>


          { /** Daily Scrum */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DAILYSCRUM.title}
            </h2>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {DAILYSCRUM.description}
                {DAILYSCRUM.description2}
                {DAILYSCRUM.imgUrls.map((item: any, index: number) => (
                  <ImageEverywhere key={index} imageUrl={item} />
                ))}
              </div>
            </div>
          </div>


          { /** Review */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {REVIEW.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {REVIEW.description}
              </p>
            </div>
          </div>

        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}