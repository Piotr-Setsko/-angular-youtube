export interface SearchListResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchListItems[];
}

interface SearchListItems {
  kind: string;
  etag: string;
  id: VideoList;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumb;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    }
    defaultAudioLanguage: string;
    defaultLanguage?: string;
  };
}

interface ThumbObj {
  url: string;
  width: number;
  height: number;
}

interface Thumb {
  default: ThumbObj;
  medium: ThumbObj;
  high: ThumbObj;
  standard: ThumbObj;
  maxres: ThumbObj;
}

interface VideoList {
  kind: string;
  videoId: string;
}
