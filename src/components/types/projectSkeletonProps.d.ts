import { ReactNode } from 'react';

interface ProjectSkeletonProps {
  title: string;
  date: string;
  imageUrl: string;
  summary: ReactNode;
  children: ReactNode;  
};