import { SkillCard, Tools } from "@/components/elements";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptop, FaListCheck, FaPalette } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';

export const SkillSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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
            title="Graphic Design"
            description="Creating visually attractive design"
          />
        );
      case 2:
        return (
          <SkillCard
            icon={<FaLaptop className="text-purple-500 text-3xl" />}
            title="UI/UX Design"
            description="Creating Web Design with style guide and foundation."
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

  const renderSkillCard = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return (
          <div className="flex flex-row gap-8">
            <SkillCard
              icon={<FaPalette className="text-purple-500 text-3xl" />}
              title="Graphic Design"
              description="Creating visually attractive design" />
            <SkillCard
              icon={<FaLaptop className="text-purple-500 text-3xl" />}
              title="UI/UX Design"
              description="Creating Web Design with style guide and foundation." />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-row gap-8">
            <SkillCard
              icon={<FaCode className="text-purple-500 text-3xl" />}
              title="Programming"
              description="Creating software solutions through coding." />
            <SkillCard
              icon={<FaListCheck className="text-purple-500 text-3xl" />}
              title="Project Management"
              description="Manage and coordinate team effectively" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div data-aos="fade-up" id="skills" className=" h-full flex flex-col items-center gap-4 mx-16 my-12">
      <div className="items-center item-center justify-center font-bold text-2xl">
        Skills and Tools
      </div>
      <div className="h-full w-full flex flex-col items-center">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out transform mb-4"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {isMobile ? renderSkillCardMobile(currentPage) : renderSkillCard(currentPage)}
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

      <Tools />
    </div>
  )
}