
import { Project, Service } from './types';

// Helper function to convert image URLs to Netlify Image CDN format
export const getNetlifyImageUrl = (imagePath: string, width: number = 1200, quality: number = 80): string => {
  // Encode the image path/URL for the Netlify Image CDN
  const encodedPath = encodeURIComponent(imagePath);
  return `/.netlify/images?url=${encodedPath}&w=${width}&q=${quality}`;
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    number: '001',
    title: 'Boxx Club',
    description: "Capturing the pulse of South Korea's nightlife for Boxx Club. This project showcases a comprehensive suite of production services, including cinematography, rhythmic editing, and color correction, designed to drive engagement and brand awareness.",
    category: 'Videography',
    image: '/images/projects/boxx-club.jpg',
    videoUrl: '/videos/boxx-club.mp4'
  },
  {
    id: '2',
    number: '002',
    title: 'Zhangjiejie National Park',
    description: "Filmed in China's Zhangjiajie National Park, this project explores the concept of 'visual stillness.' The look is defined by a low-contrast grade and soft highlight roll-off, complemented by a slow-paced edit designed to immerse the viewer in a dreamlike look and feel.",
    category: 'Look Development',
    image: '/images/projects/zhangjiejie.jpg',
    videoUrl: '/videos/zhangjiejie.mp4'
  },
  {
    id: '3',
    number: '003',
    title: 'Chengdu City',
    description: 'A deep dive into the urban fabric of Chengdu. Capturing the contrast between ancient traditions and modern metropolitan life.',
    category: 'Look Development',
    image: '/images/projects/chengdu.jpg',
    videoUrl: '/videos/chengdu travel.mp4'
  },
  {
    id: '4',
    number: '004',
    title: 'Gallery',
    description: 'View the full photography collection.',
    category: 'Full Archive',
    image: '',
    isGalleryLink: true
  }
];

// Gallery images organized by session/category
// Images are organized in subfolders within public/images/gallery/
export interface GallerySession {
  title: string;
  images: string[];
}

export const GALLERY_SESSIONS: GallerySession[] = [
  {
    title: 'The Boxx Photo Session',
    images: [
      '/images/gallery/The Boxx Photo session/Box-1001-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1013-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1018-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1019-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1022-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1029-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1034-.jpg',
      '/images/gallery/The Boxx Photo session/Box-1037-.jpg',
      '/images/gallery/The Boxx Photo session/DSC00816-Enhanced-NR.jpg',
      '/images/gallery/The Boxx Photo session/DSC00897-Enhanced-NR.jpg',
      '/images/gallery/The Boxx Photo session/DSC00995-Enhanced-NR.jpg',
      '/images/gallery/The Boxx Photo session/DSC01022-Enhanced-NR.jpg',
      '/images/gallery/The Boxx Photo session/DSC01406-Enhanced-NR.jpg',
    ]
  },
  {
    title: 'Client Session',
    images: [
      '/images/gallery/Client session/DSC02491-Enhanced-SR.jpg',
      '/images/gallery/Client session/DSC02503.jpg',
      '/images/gallery/Client session/DSC02542-Enhanced-NR.jpg',
      '/images/gallery/Client session/DSC02616.jpg',
      '/images/gallery/Client session/DSC02639-Enhanced-NR.jpg',
      '/images/gallery/Client session/DSC02644-Enhanced-NR.jpg',
      '/images/gallery/Client session/DSC02691-Enhanced-NR.jpg',
      '/images/gallery/Client session/DSC08856-Edit.jpg',
      '/images/gallery/Client session/DSC08865-Edit-2.jpg',
      '/images/gallery/Client session/DSC08874noblur.jpg',
      '/images/gallery/Client session/DSC08902.jpg',
      '/images/gallery/Client session/DSC09095-Edit.jpg',
      '/images/gallery/Client session/DSC09103-Edit.jpg',
      '/images/gallery/Client session/DSC09118.jpg',
      '/images/gallery/Client session/DSC09140.jpg',
      '/images/gallery/Client session/DSC09207.jpg',
      '/images/gallery/Client session/DSC09230.jpg',
      '/images/gallery/Client session/DSC09397-Edit.jpg',
      '/images/gallery/Client session/DSC09516-2.jpg',
    ]
  },
  {
    title: 'VR Smart Event Session',
    images: [
      '/images/gallery/VR Smart Event Session/DSC06468.jpg',
      '/images/gallery/VR Smart Event Session/DSC06478.jpg',
      '/images/gallery/VR Smart Event Session/DSC06504.jpg',
      '/images/gallery/VR Smart Event Session/DSC06515.jpg',
      '/images/gallery/VR Smart Event Session/DSC06539.jpg',
      '/images/gallery/VR Smart Event Session/DSC06556.jpg',
      '/images/gallery/VR Smart Event Session/DSC06587.jpg',
    ]
  }
];

// Legacy flat array for backward compatibility (all images combined)
export const GALLERY_IMAGES = GALLERY_SESSIONS.flatMap(session => session.images);

export const SERVICES: Service[] = [
  {
    id: 'photography',
    title: 'Professional Production',
    description: 'High-end captures for fashion, commercial, and editorial needs with an eye for detail and composition.'
  },
  {
    id: 'editing',
    title: 'Video Editing',
    description: 'Narrative-driven post-production for films, documentaries, and commercials, ensuring rhythm and impact.'
  },
  {
    id: 'grading',
    title: 'Color Grading',
    description: 'Expert-level color correction and grading to achieve specific cinematic looks and technical perfection.'
  },
  {
    id: 'creative',
    title: 'Creative Direction',
    description: 'Holistic project guidance from conceptualization to the final frame delivery.'
  }
];
