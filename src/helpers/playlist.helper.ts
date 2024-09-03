import { createImageLinks } from "@/lib/utils";
import { Playlist, PlaylistAPIResponse } from "@/types/playlist.type";
import { formatArtistMap } from "./artist.helper";
import { formatSong } from "./song.helper";

export const formatPlaylist = (playlist: PlaylistAPIResponse): Playlist => {
  return {
    id: playlist.id,
    title: playlist.title,
    description: playlist.header_desc,
    type: playlist.type,
    year: playlist.year ? parseInt(playlist.year) : null,
    playCount: playlist.play_count ? parseInt(playlist.play_count) : null,
    language: playlist.language,
    explicitContent: playlist.explicit_content === "1",
    url: playlist.perma_url,
    songCount: playlist.list_count ? parseInt(playlist.list_count) : null,
    artists: playlist.more_info.artists?.map(formatArtistMap) || null,
    image: createImageLinks(playlist.image),
    songs: (playlist.list && playlist.list?.map(formatSong)) || null,
  };
};
