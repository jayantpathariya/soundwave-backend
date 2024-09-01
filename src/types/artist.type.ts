import { DownloadLink } from "./common.type";

export type ArtistAPIResponse = {
  id: string;
  name: string;
  role: string;
  image: string;
  type: "artist";
  perma_url: string;
};

export type Artist = {
  id: string;
  name: string;
  role: string;
  image: DownloadLink[];
  type: "artist";
  url: string;
};
