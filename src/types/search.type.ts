import { DownloadLink } from "@/types/common.type";
import { Song, SongAPIResponse } from "@/types/song.type";
import { ArtistMap, ArtistMapAPIResponse } from "./artist.type";

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

type SearchAllAlbum = {
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

type SearchAllSong = {
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

type SearchAllArtist = {
  id: string;
  title: string;
  image: DownloadLink[];
  type: string;
  description: string;
  position: number;
};

type SearchAllPlaylist = {
  id: string;
  title: string;
  image: DownloadLink[];
  url: string;
  language: string;
  type: string;
  description: string;
};

type SearchAllTopQuery = {
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

export type SearchResult =
  | SearchAllAlbum
  | SearchAllSong
  | SearchAllArtist
  | SearchAllPlaylist
  | SearchAllTopQuery;

export type Search = SearchResult[];

export type SearchSongAPIResponse = {
  total: number;
  start: number;
  results: SongAPIResponse[];
};

export type SearchSong = {
  total: number;
  start: number;
  result: Song[];
};

export type SearchAlbumAPIResponse = {
  total: number;
  start: number;
  results: {
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    type: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: SongAPIResponse[];
    more_info: {
      query: string;
      text: string;
      music: string;
      song_count: string;
      artistMap: {
        primary_artists: ArtistMapAPIResponse[];
        featured_artists: ArtistMapAPIResponse[];
        artists: ArtistMapAPIResponse[];
      };
    };
  }[];
};

export type SearchAlbum = {
  total: number;
  start: number;
  results: {
    id: string;
    title: string;
    description: string;
    year: number | null;
    type: string;
    playCount: number | null;
    language: string;
    explicitContent: boolean;
    artists: {
      primary: ArtistMap[];
      featured: ArtistMap[];
      all: ArtistMap[];
    };
    url: string;
    image: DownloadLink[];
  }[];
};

export type SearchArtistAPIResponse = {
  total: number;
  start: number;
  results: {
    id: string;
    name: string;
    ctr: number;
    entity: number;
    image: string;
    role: string;
    perma_url: string;
    type: string;
    mini_obj: boolean;
    isRadioPresent: boolean;
    is_followed: boolean;
  }[];
};

export type SearchArtist = {
  total: number;
  start: number;
  results: {
    id: string;
    name: string;
    role: string;
    type: string;
    image: DownloadLink[];
    url: string;
  }[];
};

export type SearchPlaylistAPIResponse = {
  total: number;
  start: number;
  results: {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: string;
    perma_url: string;
    more_info: {
      uid: string;
      firstname: string;
      artist_name: any;
      entity_type: string;
      entity_sub_type: string;
      video_available: boolean;
      is_dolby_content: boolean;
      sub_types: any;
      images: any;
      lastname: string;
      song_count: string;
      language: string;
    };
    explicit_content: string;
    mini_obj: boolean;
    numsongs: string;
  }[];
};

export type SearchPlaylist = {
  total: number;
  start: number;
  results: {
    id: string;
    title: string;
    type: string;
    image: DownloadLink[];
    url: string;
    songCount: number | null;
    language: string;
    explicitContent: boolean;
  }[];
};
