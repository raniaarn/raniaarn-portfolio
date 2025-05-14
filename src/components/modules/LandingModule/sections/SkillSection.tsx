import { SkillCard, Tools } from "@/components/elements";
import { Slide } from "react-slideshow-image";
import { SKILLS } from '../constants/skills'
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptop, FaListCheck, FaPalette } from "react-icons/fa6";

export const SkillSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, _] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const autoplayInterval = 2000;
  const [totalPages, setTotalPages] = useState(4);
  const isMobile = useMediaQuery({ maxWidth: 700 });

  useEffect(() => {
    setTotalPages(isMobile ? 4 : 2)
  }, [isMobile])

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextPage();
    }, autoplayInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };


  const handleMouseMove = (event: { pageX: number; }) => {
    if (sliderRef.current && isDragging) {
      const x = event.pageX - sliderRef.current.offsetLeft;
      const distance = x - startX;
      sliderRef.current.style.transform = `translateX(${distance}px)`;
    }
  };

  const handleMouseUp = (event: { pageX: number; }) => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(0)`;
      if (startX - event.pageX > 50) {
        nextPage();
      } else if (startX - event.pageX < -50) {
        prevPage();
      }
    }
  };

  const renderSkillCardMobile = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return (
          <SkillCard
            icon={<FaPalette className="text-purple-500 text-3xl" />}
            title="UI/UX Design"
            description="Creating Web Design with style guide and foundation."
          />
        );
      case 2:
        return (
          <SkillCard
            icon={<FaLaptop className="text-purple-500 text-3xl" />}
            title="Graphic Design"
            description="Creating visually attractive design"
          />
        );
      case 3:
        return (
          <SkillCard
            icon={<FaCode className="text-purple-500 text-3xl" />}
            title="Programming"
            description="Creating software solutions through coding."
          />
        );
      case 4:
        return (
          <SkillCard
            icon={<FaListCheck className="text-purple-500 text-3xl" />}
            title="Project Management"
            description="Manage and coordinate team effectively"
          />
        );
      default:
        return null;
    }
  };

  const slides = []
  for (let i = 0; i < SKILLS.length; i += 2) {
    slides.push(
      <div className="flex justify-center items-center gap-4">
        <SkillCard {...SKILLS[i]} />
        {SKILLS[i + 1] && <SkillCard {...SKILLS[i + 1]} />}
      </div>
    )
  }

  const indicators = () => (
    <button
      className='w-3 h-3 mx-1 rounded-full cursor-pointer indicator'
    ></button>
  )

  return (
    <div data-aos="fade-up" id="skills" className=" h-full flex flex-col items-center gap-4 mx-16 my-12">
      <h2 className="items-center item-center justify-center font-bold text-2xl">
        What I Do?
      </h2>
      <div className="h-full w-full flex flex-col items-center md:hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out transform mb-4"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {renderSkillCardMobile(currentPage)}
        </div>
        <div className="flex mt-4">
          {[...Array(totalPages).fill(undefined)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index + 1 === currentPage ? "bg-purple-500" : "bg-gray-300"
                }`}
              onClick={() => setCurrentPage(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1440px] hidden md:block">
        <Slide
          indicators={indicators}
          duration={1500}
          transitionDuration={750}
          canSwipe={false}
          autoplay={true}
          arrows={false}
          easing="cubic"
          cssClass="pb-4"
        >
          {slides}
        </Slide>
      </div>
    </div>
  )
}