export type PageType =
  | 'home'
  | 'about'
  | 'services'
  | 'solutions'
  | 'traction'
  | 'contact';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isFounder: boolean;
  educationOrExp?: string;
}

export interface PartnerItem {
  name: string;
  phone?: string[];
  email?: string;
  logoUrl?: string;
  color: string;
  description: string;
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  client: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category?: string;
  image: string;
}
