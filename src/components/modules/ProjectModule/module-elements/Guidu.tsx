import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import {
  SUMMARY,
  PROBLEM,
  TARGET,
  ROLE,
  SCOPE,
  PROCESS
} from '../constants/guiduConstants'
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Guidu = () => {
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
        <div className="text-sm grid items-center grid-cols-3 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div className="span-col-1">
              <Tags key={index} title={item} />
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-black text-lg">
          Link to Prototype
        </h3>
        <Link href={SUMMARY.Prototype} target="blank">
          <Button content='Prototype' style='primary' extendClassName="w-full" />
        </Link>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="Guidu" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/Guidu.png"
        title="Guidu: Mobile App Research and Design"
        date="January 2022"
      >
        <div className="flex flex-col gap-8">

          { /** Problem Statement */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PROBLEM.title}
            </h2>
            {PROBLEM.paragraphs.map((item, index) => (
              <p className="text-sm text-black mb-2 text-justify">
                {item}
              </p>
            ))}
            <ImageEverywhere imageUrl={PROBLEM.imageUrl} />
          </div>

          { /** Users */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {TARGET.title}
            </h2>
            <p className="text-sm text-black mb-2 text-justify">
              {TARGET.description}
            </p>
            <div className="text-black">
              <ol className="list-disc pl-8 text-justify">
                {TARGET.list.map((item, index) => (
                  <li className="text-sm" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          { /** ROLES */}
          <div className="flex flex-col gap-4">
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

          { /** Scope & Constraints */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {SCOPE.title}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-black mb-2 text-justify">
                {SCOPE.description}
              </p>
            </div>

            {/** Scope */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {SCOPE.scope}
              </h3>
              <div className="text-black">
                <ul className="list-disc pl-8 text-justify">
                  {SCOPE.scopeList.map((item, index) => (
                    <li className="text-sm" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/** Constraints */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-black">
                {SCOPE.constraints}
              </h3>
              <p className="text-sm text-black mb-2 text-justify">
                {SCOPE.constraintsDesc}
              </p>
            </div>
          </div>

          {/** Process */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {PROCESS.title}
            </h2>
            {PROCESS.sections.map((item) => (
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
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}