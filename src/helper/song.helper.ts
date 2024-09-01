import { createDownloadLinks, createImageLinks } from "@/lib/utils";
import { Song, SongAPIResponse } from "@/types/song.type";
import { formatArtistMap } from "./artist.helper";

export const formatSong = (song: SongAPIResponse): Song => {
  return {
    id: song.id,
    title: song.title,
    type: song.type,
    year: song.year,
    releaseDate: song.more_info?.release_date || null,
    duration: song.more_info?.duration || null,
    label: song.more_info?.label_url,
    explicitContent: song.explicit_content === "1",
    playCount: song.play_count ? parseInt(song.play_count) : null,
    language: song.language,
    hasLyrics: song.more_info?.has_lyrics === "true",
    lyricsId: song?.more_info.lyrics_id || null,
    url: song.perma_url,
    copyright: song.more_info?.copyright_text || null,
    album: {
      id: song.more_info?.album_id,
      title: song.more_info?.album,
      url: song.more_info?.album_url,
    },
    artists: {
      primary: song.more_info?.artistMap?.primary_artists?.map(formatArtistMap),
      featured:
        song.more_info?.artistMap?.featured_artists?.map(formatArtistMap),
      all: song.more_info?.artistMap?.artists?.map(formatArtistMap),
    },
    image: createImageLinks(song.image),
    downloadUrl: createDownloadLinks(song.more_info?.encrypted_media_url),
  };
};
