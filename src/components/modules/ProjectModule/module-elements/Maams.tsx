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
  REVIEW
} from '../constants/maamsConstants';
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Maams = () => {
  const summaryContent = (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-purple-500 text-xl">
          {SUMMARY.title}
        </div>
        <div className="text-sm">
          {SUMMARY.summary}
        </div>
        <div className='flex-row flex gap-4 w-full justify-start'>
          <Link href={SUMMARY.prototype} target="blank">
            <Button content='Prototype' style='primary' />
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
        date="February 2024 - present (Ongoing)"
      >
        <div className="flex flex-col gap-8">

          { /** ROLES */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {ROLE.title}
            </div>
            <div className="text-sm text-black mb-2 text-justify">
              {ROLE.description}
            </div>
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

          { /** Documentation */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {DOCUMENTATION.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {DOCUMENTATION.description}
              </div>
              <Link href={DOCUMENTATION.documentation} target="blank">
                <Button style="primary" content="Articles" extendClassName="w-full" />
              </Link>
            </div>
          </div>


          { /** Agile */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {AGILE.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {AGILE.description}
              </div>
            </div>
          </div>

          {/** Prasprint */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {PRASPRINT.title}
            </div>
            {PRASPRINT.sections.map((item) => (
              <div id={item.title} className="text-black flex flex-col gap-2">
                <div className="font-semibold text-black">
                  {item.title}
                </div>
                {(item.description).map((descriptions) => (
                  <div className="text-sm text-black mb-2 text-justify">
                    {descriptions}
                  </div>
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
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {SPRINTPLANNING.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {SPRINTPLANNING.description}
              </div>
              <ImageEverywhere imageUrl={SPRINTPLANNING.imageUrl} />
            </div>
          </div>


          { /** Daily Scrum */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {DAILYSCRUM.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {DAILYSCRUM.description}
              </div>
            </div>
          </div>


          { /** Review */}
          <div className="flex flex-col gap-4">
            <div className="font-bold text-purple-500 text-xl">
              {REVIEW.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-black mb-2 text-justify">
                {REVIEW.description}
              </div>
            </div>
          </div>

        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}