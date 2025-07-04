import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { FaTimes, FaArrowRight, FaArrowLeft, FaSpinner } from 'react-icons/fa'
import Image from 'next/image'
import { HiglightModalProps } from '@/components/types/highlightModalProps'

export const ModalSum: React.FC<HiglightModalProps> = ({ handleCloseSum, childImageUrl }) => {
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useOnClickOutside(ref, () => handleCloseSum())

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? childImageUrl.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === childImageUrl.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="px-4 h-screen fixed inset-0 z-50 flex backdrop-blur-sm bg-gray-800 bg-opacity-60 justify-center items-center">
      <div ref={ref} className="flex flex-col bg-white rounded-lg max-w-[800px] w-full px-4 py-6 items-center">
        {/* Close Button */}
        <div className="flex justify-end w-full mb-4">
          <button onClick={handleCloseSum}>
            <FaTimes className="text-purple-500 text-xl" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex gap-2 mb-6">
          {childImageUrl.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-purple-500 scale-110' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>

        {/* Image */}
        <div className="w-full h-[500px] flex justify-center items-center">
          {isLoading ? (
            <FaSpinner className="text-purple-500 text-4xl animate-spin" />) : (
            <Image
              src={childImageUrl[currentIndex]}
              alt={`Slide ${currentIndex}`}
              width={960}
              height={600}
              className="rounded-lg object-contain"
              onLoadingComplete={() => setIsLoading(false)}
            />
          )}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="bg-purple-500 text-white px-2 py-2 rounded hover:bg-purple-600"
          >
            <FaArrowLeft className="text-white text-sm" />
          </button>
          <button
            onClick={handleNext}
            className="bg-purple-500 text-white px-2 py-2 rounded hover:bg-purple-600"
          >
            <FaArrowRight className="text-white text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}
