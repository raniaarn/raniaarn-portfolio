import { ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import { SUMMARY, EVENTS } from "../constants/eventsConstants";
import Image from "next/image";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Events = () => {
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
      </div>
    </>
  )

  return (
    <LayoutComponent metaTitle="Events" metaDescription="Welcome to Raniaarn's Page">
      <ProjectSkeleton
        summary={summaryContent}
        imageUrl="/images/org.png"
        title="Designs for Organizations and Events"
        date="2021 - 2024"
      >
        <div className="flex flex-col gap-8">
          {EVENTS.map((event, index) => (
            <div key={index} id={event.title} className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <h2 className="font-bold text-purple-500 text-xl">
                  {event.title}
                </h2>
                <h2 className="font-bold text-black-500 text-lg">
                  - {event.roles}
                </h2>
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                <ul className="list-disc pl-4 text-justify">
                  {event.descriptions.map((descs, index) =>
                    <li key={index}>
                      {descs}
                    </li>
                  )}
                </ul>
              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {event.childs?.map((descs, index) =>
                  <div key={index} className="flex flex-col gap-4">
                    {descs.descriptions}
                    {descs.imageUrls && <ImageEverywhere size={Number(descs.imageSize)} imageUrl={descs.imageUrls} />}
                    {descs.iframeUrl &&
                      <iframe className="h-[160px] md:h-[385px] w-full my-4" src={descs.iframeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    }
                  </div>
                )}
              </div>
              <hr className="my-1 border-purple-500" />
            </div>
          ))}

        </div>
        <Image
          className="mx-auto items-center pt-4"
          src='/images/salingtukar/closing.png'
          alt="Bye!"
          width={100}
          height={100}
        >
        </Image>
      </ProjectSkeleton>
    </LayoutComponent >
  )
}
