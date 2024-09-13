import { Artist, ArtistAPIResponse } from "./artist.type";
import { DownloadLink } from "./common.type";

export type SongAPIResponse = {
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
  list: string;
  more_info: {
    music: string;
    album_id: string;
    album: string;
    label: string;
    origin: string;
    is_dolby_content: boolean;
    "320kbps": string;
    encrypted_media_url: string;
    encrypted_cache_url: string;
    encrypted_drm_cache_url: string;
    encrypted_drm_media_url: string;
    album_url: string;
    duration: string;
    rights: {
      code: string;
      cacheable: string;
      delete_cached_object: string;
      reason: string;
    };
    cache_state: string;
    has_lyrics: string;
    lyrics_snippet: string;
    lyrics_id: string;
    starred: string;
    copyright_text: string;
    artistMap: {
      primary_artists: ArtistAPIResponse[];
      featured_artists: ArtistAPIResponse[];
      artists: ArtistAPIResponse[];
    };
    release_date: string;
    label_url: string;
    vcode: string;
    vlink: string;
    triller_available: boolean;
    request_jiotune_flag: boolean;
    webp: string;
  };
};

export type LyricsAPIResponse = {
  lyrics: string;
  lyrics_copyright: string;
  snippet: string;
};

export type Song = {
  id: string;
  title: string;
  type: string;
  year: string;
  releaseDate?: string | null;
  duration?: string | null;
  label?: string | null;
  explicitContent: boolean;
  playCount?: number | null;
  language: string;
  hasLyrics: boolean;
  lyricsId?: string | null;
  lyrics?: string; // TODO: Add lyrics type
  url: string;
  copyright?: string | null;
  album: {
    id: string;
    title: string;
    url: string;
  };
  artists: {
    primary: Artist[];
    featured: Artist[];
    all: Artist[];
  };
  image: DownloadLink[];
  downloadUrl: DownloadLink[];
};

export type SongLyrics = {
  lyrics: string;
  lyrics_copyright: string;
  snippet: string;
};

export type GetSongByIdResponse = {
  songs: SongAPIResponse[];
};
