import { ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import { SUMMARY, GENERAL, PROCESS } from "../constants/berjasaConstants";
import Image from "next/image";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Berjasa = () => {
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
        imageUrl="/images/berjasa.png"
        title="Designs for Organizations and Events"
        date="2021 - 2024"
      >
        <div className="flex flex-col gap-4">
          {GENERAL.map((content, index) => (
            <div key={index} id={content.id} className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <h2 className="font-bold text-purple-500 text-xl">
                  {content.title}
                </h2>

              </div>
              <div className="text-sm text-black mb-2 text-justify">
                {content.content && <ul className="list-disc pl-4 text-justify">
                  {content.content.map((lists, index) =>
                    <li key={index}>
                      {lists}
                    </li>
                  )}
                </ul>
                }
                {content.url && <iframe className="h-[160px] md:h-[385px] w-full my-4" src={content.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}

              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {PROCESS.map((content, index) => (
            <div key={index} id={content.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-purple-500 text-xl">
                  {content.title}
                </h2>

                {content.contents.map((item, index) =>
                  <div>
                    <h3 className="text-md text-black font-semibold mb-2">
                      {item.title}
                    </h3>

                    <div className="text-sm text-black mb-2 text-justify gap-2">
                      {item.Descriptions && item.Descriptions?.map((desc, index) =>
                        desc
                      )}
                    </div>

                    {item.imgs && item.imgs.map((img, index) =>
                      <ImageEverywhere imageUrl={img} />
                    )}


                    {item.lists &&
                      <ul className="list-disc pl-4 text-justify text-sm">
                        {item.lists.map((list, index) =>
                          <li key={index}>
                            {list}
                          </li>
                        )}
                      </ul>
                    }

                    <div className="flex flex-col gap-4">
                      {item.urls && item.urls.map((proto, index) =>
                        <iframe id="Prototype" height={365} src={proto} allowFullScreen></iframe>
                      )
                      }
                    </div>

                  </div>

                )}

              </div>
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
