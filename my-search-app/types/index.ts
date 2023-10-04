export interface teaserImageUrlsprops {
  width: number;
  src: string;
}
export interface searchDataProps {
  identifier: number;
  title: string;
  link: string;
  subject: string;
  description: string;
  date: string;
  premium: number;
  image_url: string;
  teaser_image_urls: teaserImageUrlsprops[];
}

export interface SearchResultProps {
  items: searchDataProps[];
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface TotalResultProps {
  resultsCount: number;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  text: string;
  className?: string;
}

export interface ErrorDisplayProps {
  message: string;
}
