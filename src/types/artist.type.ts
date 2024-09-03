import { DownloadLink } from "./common.type";

export type ArtistAPIResponse = {
  id: string;
  name: string;
  role: string;
  image: string;
  type: string;
  perma_url: string;
};

export type Artist = {
  id: string;
  name: string;
  role: string;
  image: DownloadLink[];
  type: string;
  url: string;
};
