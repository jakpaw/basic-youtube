import { API_KEY } from 'api-key';

export interface VideoProperties {
  id: {
    videoId: string,
  };
  snippet: {
    title: string;
    description: string;
  };
}

export function searchVideos(query: string): Promise<VideoProperties[]> {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
    .then((res) => res.json())
    .then((result) => result.items);
}
