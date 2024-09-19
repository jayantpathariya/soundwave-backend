import { ArtistMap } from "./artist.type";
import { DownloadLink } from "./common.type";
import { Song, SongAPIResponse } from "./song.type";

export type PlaylistAPIResponse = {
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
    uid: string;
    is_dolby_content: boolean;
    subtype: string[];
    last_updated: string;
    username: string;
    firstname: string;
    lastname: string;
    is_followed: string;
    isFY: boolean;
    follower_count: string;
    fan_count: string;
    playlist_type: string;
    share: string;
    sub_types: string[];
    images: string[];
    H2: string | null;
    subheading: string;
    video_count: string;
    artists: {
      id: string;
      name: string;
      role: string;
      image: string;
      type: string;
      perma_url: string;
    }[];
  };
  description: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string | null;
  year: number | null;
  type: string;
  playCount: number | null;
  language: string;
  explicitContent: boolean;
  songCount: number | null;
  url: string;
  image: DownloadLink[];
  songs: Song[];
  artists: ArtistMap[];
};
