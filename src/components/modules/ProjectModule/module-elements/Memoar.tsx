import { Button, ImageEverywhere, ProjectSkeleton } from "@/components/elements"
import dynamic from "next/dynamic";
import { SUMMARY, DOCUMENTATION, ROLE, CONSTRAINTS } from '../constants/memoarConstants'
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Memoar = () => {
  const summaryContent = (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-purple-500 text-xl">
          {SUMMARY.title}
        </h2>
        <p>
          {SUMMARY.summary}
        </p>
        <div className='flex-row flex gap-4 w-full justify-start'>
          <Link href={SUMMARY.github} target="blank">
            <Button content='Github' style='primary' />
          </Link>
          <Link href={SUMMARY.website} target="blank">
            <Button content='Website' style='outline-light' />
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="Memoar" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/memoar.png"
        title="Memoar-id: Social Media Website"
        date="March 2024"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {ROLE.title}
            </h2>
            <div className="text-black">
              <ul className="list-disc pl-8 text-justify">
                {ROLE.roles.map((roleItem, index) => (
                  <li key={index}>
                    {roleItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-justify">
            <h2 className="font-bold text-purple-500 text-xl">
              {CONSTRAINTS.title}
            </h2>
            <p className="text-black">
              {CONSTRAINTS.description}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-purple-500 text-xl">
              {DOCUMENTATION.title}
            </h2>
            <ImageEverywhere imageUrl={DOCUMENTATION.imageUrl} />
          </div>
        </div>

      </ProjectSkeleton>
    </LayoutComponent>
  )
}