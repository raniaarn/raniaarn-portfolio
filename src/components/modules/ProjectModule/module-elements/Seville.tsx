import { Button, ImageEverywhere, ProjectSkeleton, Tags } from "@/components/elements"
import dynamic from "next/dynamic";
import { SUMMARY, CONTENT } from "../constants/SevilleConstants";
import Image from "next/image";
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/components/Layout').then(mod => mod.Layout)
);

export const Seville = () => {
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
        imageUrl="/images/seville.png"
        title="Seville Landing Page and Designs"
        date="2024"
      >
        <div className="flex flex-col gap-4">
          {CONTENT.map((content, index) => (
            <div key={index} id={content.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-purple-500 text-xl">
                  {content.title}
                </h2>

                {content.contents.map((item, index) =>
                  <div>

                    <div className="flex flex-col text-sm text-black text-justify gap-4">
                      {item.Descriptions.map((desc, index) =>
                        <div>
                          {desc}
                        </div>

                      )}
                    </div>


                    {item.prototypeUrl &&
                      <div className="flex flex-col my-8">
                        <iframe id="Prototype" height={400} src={item.prototypeUrl} allowFullScreen></iframe>
                      </div>

                    }

                    {item.imgs && item.imgs.map((img, index) =>
                      <ImageEverywhere imageUrl={img} />
                    )}

                    {item.webUrl &&
                      <Link href={item.webUrl} target="blank">
                        <Button style="primary" content="Seville Web" extendClassName="w-full" />
                      </Link>
                    }

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
