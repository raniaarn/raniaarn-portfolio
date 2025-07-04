import { useEffect, useRef } from "react"
import { HighlightCard } from "@/components/elements"
import { SUMMARY } from "../constants/highlights"
import { SummarySectionProps } from "@/components/types/summaryProps"

export const SummarySection: React.FC<SummarySectionProps> = ({ handleOpenSum }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div data-aos="fade-up" id="Summary" className="flex flex-col items-center gap-4 px-4">
      <h3 className="font-bold text-2xl text-center">Summary Highlights</h3>
      <p className="text-center">Click any card to see details</p>

      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-auto whitespace-nowrap w-full max-w-screen "
      >
        {SUMMARY.map((project, index) => (
          <HighlightCard
            key={index}
            imageUrl={project.imageUrl}
            childImageUrl={project.childImageUrl}
            modalId={project.modalId}
            handleOpenSum={handleOpenSum}
          />
        ))}
      </div>
    </div>
  )
}
