// This file defines TypeScript types for Prisma models used in the application.

import { PrismaClient } from '@prisma/client';

export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  description: string;
  date: Date;
  bibleReference: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  audioUrl: string;
  pdfUrl: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  location: string;
  image: string;
  organizer: string;
  registrationStatus: string;
  registrationLink: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Service = {
  id: string;
  name: string;
  day: string;
  time: string;
  location: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Ministry = {
  id: string;
  name: string;
  description: string;
  image: string;
  leader: string;
  meetingSchedule: string;
  contactInformation: string;
  activities: string;
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Donation = {
  id: string;
  transactionId: string;
  amount: number;
  currency: string;
  category: string;
  paymentProvider: string;
  status: string;
  donorName: string | null;
  donorEmail: string | null;
  createdAt: Date;
};

export type PrayerRequest = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  request: string;
  createdAt: Date;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  createdAt: Date;
};

export type LiveStream = {
  id: string;
  facebookUrl: string;
  youtubeUrl: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
};

export type Leader = {
  id: string;
  name: string;
  position: string;
  biography: string;
  socialLinks: string[];
  createdAt: Date;
};

export type GalleryImage = {
  id: string;
  url: string;
  description: string;
  category: string;
  createdAt: Date;
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};