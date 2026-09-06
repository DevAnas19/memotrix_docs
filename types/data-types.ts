export interface ExtractorCategory {
  id: string;
  title: string;
  icon: string;
  formats: string[];
  description: string;
  note?: string;
}

export interface MemoryType {
  id: string;
  title: string;
  badge: string;
  description: string;
  useCase: string;
  codeSnippet: string;
}
