import { AlbumAPIResponse } from "./album.type";
import { DownloadLink } from "./common.type";
import { SongAPIResponse } from "./song.type";

type PlaylistAPIResponse = {
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
  list: "";
  more_info: {
    listId: string;
    isWeekly: string;
    listname: string;
    firstname: string;
    song_count: string;
    follower_count: string;
    fan_count: string;
  };
};

type TopPlaylistAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    firstname: string;
    song_count: string;
    follower_count: string;
    fan_count: string;
  };
  explicit_content: string;
};

type BrowseDiscoverItemAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    badge: string;
    sub_type: string;
    is_featured: string;
    tags: string[];
    video_url: string;
    video_thumbnail: string;
  };
  explicit_content: string;
};

type ChartPlaylistAPIResponse = {
  id: string;
  image: string;
  title: string;
  type: string;
  count: string;
  perma_url: string;
  more_info: {
    firstname: string;
  };
  explicit_content?: string;
  language?: string;
};

type RadioStationAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    description: string;
    featured_station_type: string;
    query: string;
    color: string;
    language: string;
    station_display_text: string;
  };
  explicit_content: string;
};

type ArtistRadioStationAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    featured_station_type: string;
    query: string;
    station_display_text: string;
  };
  explicit_content: string;
};

type MixAPIResponse = {
  subtitle: string;
  description: string;
  id: string;
  title: string;
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
  list: "";
  more_info: {
    firstname: string;
    lastname: string;
    type: string;
  };
};

type CityModPlaylistAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    video_available: null;
    sub_type: null;
  };
  explicit_content: string;
};

type CityModRadioStationAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    featured_station_type: string;
    query: string;
  };
  explicit_content: string;
};

type CityModSongAPIResponse = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  perma_url: string;
  more_info: {
    album_id: string;
    multiple_tunes: {
      id: string;
      title: string;
      type: string;
      subtype: string;
      vcode: string;
      vlink: string;
    }[];
  };
  explicit_content: string;
};

type NewTrendingAPIResponse = Array<
  AlbumAPIResponse | PlaylistAPIResponse | SongAPIResponse
>;

type TopPlaylistsAPIResponse = TopPlaylistAPIResponse[];

type TopAlBumAPIResponse = AlbumAPIResponse[];

type BrowseDiscoverAPIResponse = BrowseDiscoverItemAPIResponse[];

type ChartsAPIResponse = ChartPlaylistAPIResponse[];

type RadioAPIResponse = RadioStationAPIResponse[];

type ArtistRecosAPIResponse = ArtistRadioStationAPIResponse[];

type TagMixesAPIResponse = MixAPIResponse[];

type CityModAPIResponse = Array<
  | CityModPlaylistAPIResponse
  | CityModRadioStationAPIResponse
  | CityModSongAPIResponse
>;

export type HomeAPIResponse = {
  new_trending: NewTrendingAPIResponse;
  top_playlists: TopPlaylistsAPIResponse;
  new_albums: TopAlBumAPIResponse;
  browse_discover: BrowseDiscoverAPIResponse;
  charts: ChartsAPIResponse;
  radio: RadioAPIResponse;
  artist_recos: ArtistRecosAPIResponse;
  tag_mixes: TagMixesAPIResponse;
  city_mod: CityModAPIResponse;
};

export type HomeItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  image: DownloadLink[];
  url: string;
  year: number | null;
  playCount: number | null;
  language: string | null;
  explicitContent: boolean;
};

export type Home = [
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  },
  //  {
  //   title: string;
  //   items: HomeItem[];
  // };
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  },
  {
    title: string;
    items: HomeItem[];
  }
];
