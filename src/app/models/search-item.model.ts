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

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
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
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
