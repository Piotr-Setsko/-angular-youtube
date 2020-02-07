interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponse extends PageInfo {
  kind: string;
  etag: string;
}
