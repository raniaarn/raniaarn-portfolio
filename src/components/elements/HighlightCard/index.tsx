import { SummaryCardProps } from "@/components/types/summaryProps"
import Image from "next/image"

export const HighlightCard: React.FC<SummaryCardProps> = ({
  imageUrl,
  modalId,
  handleOpenSum
}) => {
  return (
    <div className="inline-block mr-4">
      <button onClick={() => handleOpenSum(modalId)}>
        <Image
          className="rounded-md shadow-md"
          src={imageUrl}
          alt="summary"
          width={600}
          height={400}
        />
      </button>
    </div>
  )
}
