import { ArtistAPIResponse } from "./artist.type";

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
  list: string;
  more_info: {
    release_date: string;
    song_count: string;
    artistMap: {
      primary_artists: ArtistAPIResponse[];
      featured_artists: ArtistAPIResponse[];
      artists: ArtistAPIResponse[];
    };
  };
};
