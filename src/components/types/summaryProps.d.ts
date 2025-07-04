import { ReactNode } from 'react';

interface SummaryCardData {
  imageUrl: string
  modalId: string
  childImageUrl: string[]
}

interface SummarySectionProps {
  handleOpenSum: (modalId: string) => void;
};

interface SummaryCardProps extends SummaryCardData {
  handleOpenSum: (modalId: string) => void;
};