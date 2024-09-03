import { createImageLinks } from "@/lib/utils";
import { Artist, ArtistAPIResponse } from "@/types/artist.type";

export const formatArtistMap = (artist: ArtistAPIResponse): Artist => {
  return {
    id: artist.id,
    name: artist.name,
    role: artist.role,
    image: createImageLinks(artist.image),
    type: artist.type,
    url: artist.perma_url,
  };
};
