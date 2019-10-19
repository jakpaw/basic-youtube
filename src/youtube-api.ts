import { API_KEY } from 'api-key';
import axios from 'axios';

export interface VideoProperties {
  id: {
    videoId: string,
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      },
    }
  };
}

interface SearchResponse {
  items: VideoProperties[];
}

export function searchVideos(query: string): Promise<VideoProperties[]> {
  return axios.get<SearchResponse>(
    'https://www.googleapis.com/youtube/v3/search',
    {
      params: {
        q: query,
        type: 'video',
        part: 'snippet',
        key: API_KEY,
      },
    })
    .then((res) => res.data.items);
}
