import { ArtistMap, ArtistMapAPIResponse } from "@/types/artist.type";
import { DownloadLink } from "@/types/common.type";
import { Song, SongAPIResponse } from "@/types/song.type";

export type AlbumAPIResponse = {
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
    release_date: string;
    song_count: string;
    artistMap: {
      primary_artists: ArtistMapAPIResponse[];
      featured_artists: ArtistMapAPIResponse[];
      artists: ArtistMapAPIResponse[];
    };
  };
};

export type Album = {
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
  songCount: number | null;
  url: string;
  image: DownloadLink[];
  songs: Song[];
};
