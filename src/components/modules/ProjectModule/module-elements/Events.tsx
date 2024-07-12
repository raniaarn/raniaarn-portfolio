import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import { SUMMARY, EVENTS } from "../constants/eventsConstants";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Events = () => {
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
          Navigations
        </div>
        <div className="text-sm grid items-center grid-cols-3 gap-2">
          {SUMMARY.deliverables.map((item, index) => (
            <div className="span-col-1">
              <Tags key={index} title={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="Events" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/org.png"
        title=""
        date="2021 - 2024"
      >
        <div className="flex flex-col gap-8">
          {EVENTS.map((event, indexx) => (
            <div id={event.title} className="flex flex-col gap-4">
              <div className="font-bold text-purple-500 text-xl">
                {event.title}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {event.descriptions}
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {event.childs?.map((descs, index) => 
                <div>
                  {descs.descriptions}
                  <ImageEverywhere imageUrl={descs.imageUrls} />
                </div>
                )}
              </div>
            </div>

          ))}
        </div>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}
