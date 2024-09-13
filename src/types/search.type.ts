// DownloadLink TypeScript definition (assuming based on its name)

import { DownloadLink } from "./common.type";

export type SearchAPIResponse = {
  albums: {
    data: {
      id: string;
      title: string;
      subtitle: string;
      type: string;
      image: string;
      perma_url: string;
      more_info: {
        music: string;
        ctr: number;
        year: string;
        is_movie: string;
        language: string;
        song_pids: string;
      };
      explicit_content: string;
      mini_obj: boolean;
      description: string;
    }[];
    position: number;
  };
  songs: {
    data: {
      id: string;
      title: string;
      subtitle: string;
      type: string;
      image: string;
      perma_url: string;
      more_info: {
        album: string;
        ctr: number;
        score?: string;
        vcode: string;
        vlink?: string;
        primary_artists: string;
        singers: string;
        video_available: boolean;
        triller_available: boolean;
        language: string;
      };
      explicit_content: string;
      mini_obj: boolean;
      description: string;
    }[];
    position: number;
  };
  playlists: {
    data: {
      id: string;
      title: string;
      subtitle: string;
      type: string;
      image: string;
      perma_url: string;
      more_info: {
        firstname: string;
        artist_name: string[];
        entity_type: string;
        entity_sub_type: string;
        video_available: boolean;
        is_dolby_content: boolean;
        sub_types: any;
        images: any;
        lastname: string;
        language: string;
      };
      explicit_content: string;
      mini_obj: boolean;
      description: string;
    }[];
    position: number;
  };
  artists: {
    data: {
      id: string;
      title: string;
      image: string;
      extra: string;
      type: string;
      mini_obj: boolean;
      isRadioPresent: boolean;
      ctr: number;
      entity: number;
      description: string;
      position: number;
    }[];
    position: number;
  };
  topquery: {
    data: {
      id: string;
      title: string;
      subtitle: string;
      type: string;
      image: string;
      perma_url: string;
      more_info: {
        album: string;
        ctr: number;
        score?: string;
        vcode: string;
        vlink?: string;
        primary_artists: string;
        singers: string;
        video_available: boolean;
        triller_available: boolean;
        language: string;
      };
      explicit_content?: string;
      mini_obj: boolean;
      description: string;
    }[];
    position: number;
  };
};

type SearchResponse<T> = {
  data: T[];
  position: number;
};

type AlbumModel = {
  id: string;
  title: string;
  image: DownloadLink[];
  artist: string;
  url: string;
  type: string;
  description: string;
  year: string;
  language: string;
  songIds: string;
};

type SongModel = {
  id: string;
  title: string;
  image: DownloadLink[];
  album: string;
  url: string;
  type: string;
  description: string;
  primaryArtists: string;
  singers: string;
  language: string;
};

type ArtistModel = {
  id: string;
  title: string;
  image: DownloadLink[];
  type: string;
  description: string;
  position: number;
};

type PlaylistModel = {
  id: string;
  title: string;
  image: DownloadLink[];
  url: string;
  language: string;
  type: string;
  description: string;
};

type TopQueryModel = {
  id: string;
  title: string;
  image: DownloadLink[];
  album: string;
  url: string;
  type: string;
  description: string;
  primaryArtists: string;
  singers: string;
  language: string;
};

export type Search = {
  albums: SearchResponse<AlbumModel>;
  songs: SearchResponse<SongModel>;
  artists: SearchResponse<ArtistModel>;
  playlists: SearchResponse<PlaylistModel>;
  topQuery: SearchResponse<TopQueryModel>;
};
