
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
    title: 'Ultrace 2026',
    description: 'Campaign and interview cut for Ultrace 2026. Add your final project assets into the dedicated public folders to display this entry.',
    category: 'Photography',
    image: '/images/projects/ultrace-2026/DSC07364.jpeg',
    photoImages: [
      '/images/projects/ultrace-2026/DSC07364.jpeg',
      '/images/projects/ultrace-2026/DSC07376.jpg',
      '/images/projects/ultrace-2026/DSC07397.jpeg',
      '/images/projects/ultrace-2026/DSC07404.jpeg',
      '/images/projects/ultrace-2026/DSC07433.jpg',
      '/images/projects/ultrace-2026/DSC07436.jpeg',
      '/images/projects/ultrace-2026/DSC07438.jpg',
      '/images/projects/ultrace-2026/DSC07445.jpg',
      '/images/projects/ultrace-2026/DSC07451.jpeg',
      '/images/projects/ultrace-2026/DSC07474.jpeg',
      '/images/projects/ultrace-2026/DSC07476.jpeg',
      '/images/projects/ultrace-2026/DSC07636.jpeg',
      '/images/projects/ultrace-2026/DSC07699.jpg',
      '/images/projects/ultrace-2026/DSC07704.jpg',
      '/images/projects/ultrace-2026/DSC07706.jpeg',
      '/images/projects/ultrace-2026/DSC07710.jpg',
      '/images/projects/ultrace-2026/DSC07717.jpeg',
      '/images/projects/ultrace-2026/DSC07721.jpg',
      '/images/projects/ultrace-2026/DSC07724.jpg',
      '/images/projects/ultrace-2026/DSC07728.jpeg',
      '/images/projects/ultrace-2026/DSC07749.jpeg',
      '/images/projects/ultrace-2026/DSC07749.jpg',
      '/images/projects/ultrace-2026/DSC07758.jpg',
      '/images/projects/ultrace-2026/DSC07760.jpg',
      '/images/projects/ultrace-2026/DSC07770.jpg',
      '/images/projects/ultrace-2026/DSC07832 2.jpg',
      '/images/projects/ultrace-2026/DSC07835.jpg',
      '/images/projects/ultrace-2026/DSC07835AI.jpg',
      '/images/projects/ultrace-2026/DSC07847.jpg',
      '/images/projects/ultrace-2026/DSC07849.jpg',
      '/images/projects/ultrace-2026/DSC07851.jpg',
      '/images/projects/ultrace-2026/DSC07872.jpg',
      '/images/projects/ultrace-2026/DSC07874.jpg',
      '/images/projects/ultrace-2026/DSC07978.jpg',
      '/images/projects/ultrace-2026/DSC07984.jpg',
      '/images/projects/ultrace-2026/DSC07994.jpg',
      '/images/projects/ultrace-2026/DSC08047.jpeg',
      '/images/projects/ultrace-2026/DSC08051.jpg',
      '/images/projects/ultrace-2026/DSC08055.jpg',
      '/images/projects/ultrace-2026/Nissan GTR Cyan.jpg'
    ]
  },
  {
    id: '2',
    number: '002',
    title: 'Materna Interview',
    description: 'Interview project for Materna with a clean editorial and grade pass. Add your media files to the dedicated project folders to publish this item.',
    category: 'Editing',
    image: '/images/projects/materna-interview/DSC05850.jpg',
    videoUrl: '/videos/materna-interview/main.mp4',
    photoImages: [
      '/images/projects/materna-interview/DSC05850.jpg',
      '/images/projects/materna-interview/DSC05855.jpg',
      '/images/projects/materna-interview/DSC05856.jpg',
      '/images/projects/materna-interview/DSC05865.jpg',
      '/images/projects/materna-interview/DSC05870.jpg',
      '/images/projects/materna-interview/DSC05875.jpg',
      '/images/projects/materna-interview/DSC05877.jpg',
      '/images/projects/materna-interview/DSC05882.jpg',
      '/images/projects/materna-interview/DSC05884.jpg',
      '/images/projects/materna-interview/DSC05889.jpg',
      '/images/projects/materna-interview/DSC05897.jpg',
      '/images/projects/materna-interview/DSC05904.jpg',
      '/images/projects/materna-interview/DSC05919.jpg',
      '/images/projects/materna-interview/DSC05923.jpg',
      '/images/projects/materna-interview/DSC05927.jpg',
      '/images/projects/materna-interview/DSC05928.jpg',
      '/images/projects/materna-interview/DSC05969.jpg',
      '/images/projects/materna-interview/DSC05972.jpg',
      '/images/projects/materna-interview/DSC05976.jpg',
      '/images/projects/materna-interview/DSC05978.jpg',
      '/images/projects/materna-interview/DSC05979.jpg',
      '/images/projects/materna-interview/DSC06005.jpg',
      '/images/projects/materna-interview/DSC06006.jpg',
      '/images/projects/materna-interview/DSC06010.jpg',
      '/images/projects/materna-interview/DSC06021.jpg',
      '/images/projects/materna-interview/DSC06023.jpg',
      '/images/projects/materna-interview/DSC06027.jpg',
      '/images/projects/materna-interview/DSC06035.jpg',
      '/images/projects/materna-interview/DSC06039.jpg',
      '/images/projects/materna-interview/DSC06041.jpg',
      '/images/projects/materna-interview/DSC06042.jpg',
      '/images/projects/materna-interview/DSC06047.jpg',
      '/images/projects/materna-interview/DSC06049.jpg',
      '/images/projects/materna-interview/DSC06050.jpg',
      '/images/projects/materna-interview/DSC06056.jpg',
      '/images/projects/materna-interview/DSC06062.jpg',
      '/images/projects/materna-interview/DSC06065.jpg',
      '/images/projects/materna-interview/DSC06073.jpg',
      '/images/projects/materna-interview/DSC06080.jpg',
      '/images/projects/materna-interview/DSC06093.jpg',
      '/images/projects/materna-interview/DSC06094.jpg',
      '/images/projects/materna-interview/DSC06095.jpg',
      '/images/projects/materna-interview/DSC06096.jpg',
      '/images/projects/materna-interview/DSC06099.jpg',
      '/images/projects/materna-interview/DSC06105.jpg'
    ]
  },
  {
    id: '3',
    number: '003',
    title: 'Turnhalle x Peterscars Shoot',
    description: 'Photo-only project focused on moments, details, and atmosphere from the Turnhalle Peterscars session.',
    category: 'Photography',
    image: '/images/projects/Turnhalle-Peterscars/IMG_5428.JPG',
    photoImages: [
      '/images/projects/Turnhalle-Peterscars/IMG_5428.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5429.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5430.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5431.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5432.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5433.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5434.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5435.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5436.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5437.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5438.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5439.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5440.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5441.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5442.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5443.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5444.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5445.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5446.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5447.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5448.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5449.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5450.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5451.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5452.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5453.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5454.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5455.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5456.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5457.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5458.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5459.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5460.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5461.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5462.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5463.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5464.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5465.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5466.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5467.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5468.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5469.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5470.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5471.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5472.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5473.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5474.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5475.JPG',
      '/images/projects/Turnhalle-Peterscars/IMG_5476.JPG'
    ]
  },
  {
    id: '4',
    number: '004',
    title: 'Boxx Club',
    description: "Capturing the pulse of South Korea's nightlife for Boxx Club. This project showcases a comprehensive suite of production services, including cinematography, rhythmic editing, and color correction, designed to drive engagement and brand awareness.",
    category: 'Videography',
    image: '/images/projects/boxx-club.jpg',
    videoUrl: '/videos/boxx-club.mp4'
  },
  {
    id: '5',
    number: '005',
    title: 'Chengdu City',
    description: 'A deep dive into the urban fabric of Chengdu. Capturing the contrast between ancient traditions and modern metropolitan life.',
    category: 'Look Development',
    image: '/images/projects/chengdu.jpg',
    videoUrl: '/videos/chengdu travel.mp4'
  },
  {
    id: '6',
    number: '006',
    title: 'Lijiang',
    description: 'Exploring the ancient charm of Lijiang, where traditional Naxi culture meets timeless architecture in a visual journey through historic streets and mountain vistas.',
    category: 'Look Development',
    image: '/images/projects/lijiang.jpg',
    videoUrl: '/videos/Lijiang travel.mp4'
  },
  {
    id: '7',
    number: '007',
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
    title: 'Photography',
    description: 'High-end still imagery for fashion, commercial, and editorial projects with careful attention to composition and detail.'
  },
  {
    id: 'videography',
    title: 'Videography',
    description: 'Cinematic filming for campaigns, events, and branded content from concept through capture.'
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
  }
];
