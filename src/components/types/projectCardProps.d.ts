import { ReactNode } from 'react';

interface ProjectCardProps extends ProjectCardData {
  handleOpen: (modalId: string) => void;
};

interface ProjectCardData {
  imageUrl: string
  skillsUrls: string[]
  title: string
  redirect: string[]
  redirectOutside?: string
  top?: string
  lastItem?: boolean
  description: string
  modalId: string
}

interface ProjectSectionProps {
  handleOpen: (modalId: string) => void;
};