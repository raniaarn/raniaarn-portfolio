import Image from 'next/image'
import { useState } from 'react'

export const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Illustration",
      image: "/images/expertise/illustrations.png"
    },
    {
      label: "UI Designs",
      image: "/images/expertise/uidesigns.png"
    },
    {
      label: "User Research",
      image: "/images/expertise/userresearch.png"
    },
    {
      label: "Design System",
      image: "/images/expertise/designsystems.png"
    }
  ];

  return (
    <div data-aos="fade-up" id="Expertise" className="flex justify-center px-4 md:mx-16 my-12">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl">
        <h2 className="text-2xl text-center font-bold mb-6">
          Glimpses of My Expertise
        </h2>

        <div className="grid grid-cols-2 gap-2 w-fit mb-4 md:flex md:flex-row md:gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${activeTab === index
                  ? 'bg-purple-400 text-white'
                  : 'bg-white text-purple-400 outline outline-2 outline-violet-400'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>


        <div className="w-full p-2">
          <div className="relative w-full" style={{
            height: 'auto',
            aspectRatio: '16/9',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 800px"
              priority={activeTab === 0}
            />
          </div>
        </div>
      </div>
    </div >

  )
}