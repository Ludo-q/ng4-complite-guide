interface DocOpenLibraryAPIResponse {
  cover_i: string;
  has_full_text: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
}

export interface SearchOpenLibraryAPIResponse {
  start: number;
  num_found: number;
  docs: DocOpenLibraryAPIResponse[];
}
