import { Album, AlbumAPIResponse } from "@/types/album.type";
import { DownloadLink } from "@/types/common.type";
import { Song, SongAPIResponse } from "@/types/song.type";

export type ArtistMapAPIResponse = {
  id: string;
  name: string;
  role: string;
  image: string;
  type: string;
  perma_url: string;
};

export type ArtistMap = {
  id: string;
  name: string;
  role: string;
  image: DownloadLink[];
  type: string;
  url: string;
};

export type ArtistAPIResponse = {
  artistId: string;
  name: string;
  subtitle: string;
  image: string;
  follower_count: string;
  type: string;
  isVerified: boolean;
  dominantLanguage: string;
  dominantType: string;
  topSongs: SongAPIResponse[];
  topAlbums: AlbumAPIResponse[];
  singles: SongAPIResponse[];
  dedicated_artist_playlist: {
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
  featured_artists: {
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
  similarArtists: {
    _id: string;
    similar: string;
    languages: string;
    isVerified: string;
    image_url: string;
    wiki: string;
    roles: string;
    combine_artist_pages: string;
    webp: string;
    search_keyword: string;
    replace_with_primary_artists: number;
    twitter: string;
    dob: string;
    aka: string;
    name: string;
    primary_artist_id: string;
    id: string;
    fb: string;
    bio: string;
    perma_url: string;
    type: string;
    mini_obj: boolean;
    isRadioPresent: boolean;
    dominantType: string;
  }[];
  isRadioPresent: boolean;
  bio: string;
  dob: string;
  fb: string;
  twitter: string;
  wiki: string;
  urls: {
    albums: string;
    bio: string;
    comments: string;
    songs: string;
    overview: string;
  };
  availableLanguages: string[];
  fan_count: string;
  topEpisodes: any[];
  is_followed: boolean;
  id: string;
  perma_url: string;
};

export type Artist = {
  id: string;
  name: string;
  url: string;
  type: string;
  image: DownloadLink[];
  followerCount: number | null;
  fanCount: string | null;
  isVerified: boolean | null;
  dominantLanguage: string | null;
  dominantType: string | null;
  bio:
    | {
        text: string | null;
        title: string | null;
        sequence: string | null;
      }[]
    | null;
  dob: string | null;
  fb: string | null;
  twitter: string | null;
  wiki: string | null;
  availableLanguages: string[];
  isRadioPresent: boolean | null;
  topSongs: Song[] | null;
  topAlbums: Album[] | null;
  singles: Song[] | null;
  similarArtist:
    | {
        id: string;
        name: string;
        url: string;
        image: DownloadLink[];
        languages: Record<string, string> | null;
        wiki: string;
        dob: string;
        fb: string;
        twitter: string;
        isRadioPresent: boolean;
        type: string;
        dominantType: string;
        aka: string;
        bio: string | null;
        similarArtist:
          | {
              id: string;
              name: string;
            }[]
          | null;
      }[]
    | null;
};
