import { createImageLinks } from "@/lib/utils";
import { Album, AlbumAPIResponse } from "@/types/album.type";
import { formatArtistMap } from "./artist.helper";
import { formatSong } from "./song.helper";

export const formatAlbum = (album: AlbumAPIResponse): Album => {
  return {
    id: album.id,
    title: album.title,
    description: album.header_desc,
    type: album.type,
    year: album.year ? parseInt(album.year) : null,
    playCount: album.play_count ? parseInt(album.play_count) : null,
    language: album.language,
    explicitContent: album.explicit_content === "1",
    url: album.perma_url,
    songCount: album.more_info.song_count
      ? parseInt(album.more_info.song_count)
      : null,
    artists: {
      primary: album.more_info.artistMap.primary_artists.map(formatArtistMap),
      featured: album.more_info.artistMap.featured_artists.map(formatArtistMap),
      all: album.more_info.artistMap.artists.map(formatArtistMap),
    },
    image: createImageLinks(album.image),
    songs: album.list.map(formatSong),
  };
};
