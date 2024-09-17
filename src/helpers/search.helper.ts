import { createImageLinks } from "@/lib/utils";
import { Search, SearchAPIResponse, SearchResult } from "@/types/search.type";

export const formatSearch = (search: SearchAPIResponse): Search => {
  const topQuery = {
    data: search?.topquery?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        album: item?.more_info?.album,
        url: item?.perma_url,
        type: item?.type,
        description: item?.description,
        primaryArtists: item?.more_info?.primary_artists,
        singers: item?.more_info?.singers,
        language: item?.more_info?.language,
      };
    }),
    position: search?.topquery?.position,
  };
  const songs = {
    data: search?.songs?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        album: item?.more_info?.album,
        url: item?.perma_url,
        type: item?.type,
        description: item?.description,
        primaryArtists: item?.more_info?.primary_artists,
        singers: item?.more_info?.singers,
        language: item?.more_info?.language,
      };
    }),
    position: search?.songs?.position,
  };

  const artists = {
    data: search?.artists?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        type: item?.type,
        description: item?.description,
        position: item?.position,
      };
    }),
    position: search?.artists?.position,
  };

  const albums = {
    data: search?.albums?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        artist: item?.more_info?.music,
        url: item?.perma_url,
        type: item?.type,
        description: item?.description,
        year: item?.more_info?.year,
        language: item?.more_info?.language,
        songIds: item?.more_info?.song_pids,
      };
    }),
    position: search?.albums?.position,
  };

  const playlists = {
    data: search?.playlists?.data.map((item) => {
      return {
        id: item?.id,
        title: item?.title,
        image: createImageLinks(item?.image),
        url: item?.perma_url,
        language: item?.more_info?.language,
        type: item?.type,
        description: item?.description,
      };
    }),
    position: search?.playlists?.position,
  };

  const combinedData: { data: SearchResult[]; position: number }[] = [
    topQuery,
    songs,
    artists,
    albums,
    playlists,
  ];

  // Flatten the sorted data
  const sortedSearch = combinedData
    .sort((a, b) => a.position - b.position)
    .flatMap((entry) => entry.data ?? []);

  return sortedSearch as Search;
};
