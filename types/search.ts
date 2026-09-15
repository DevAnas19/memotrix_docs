export interface SearchItem {
  cat: string;
  title: string;
  href: string;
  snippet?: string;
}

export interface SearchState {
  isOpen: boolean;
  query: string;
  results: SearchItem[];
}
