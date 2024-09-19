import { formatSong } from "@/helpers//song.helper";
import { formatAlbum } from "@/helpers/album.helper";
import { createImageLinks } from "@/lib/utils";
import {
  Artist,
  ArtistAPIResponse,
  ArtistMap,
  ArtistMapAPIResponse,
} from "@/types/artist.type";

export const formatArtistMap = (artist: ArtistMapAPIResponse): ArtistMap => {
  return {
    id: artist.id,
    name: artist.name,
    role: artist.role,
    image: createImageLinks(artist.image),
    type: artist.type,
    url: artist.perma_url,
  };
};

export const formatArtist = (artist: ArtistAPIResponse): Artist => {
  return {
    id: artist.artistId ?? artist.id,
    name: artist.name,
    url: artist.urls?.overview ?? artist.perma_url,
    type: artist.type,
    followerCount: artist.follower_count
      ? parseInt(artist.follower_count)
      : null,
    fanCount: artist.fan_count || null,
    isVerified: artist.isVerified || null,
    dominantLanguage: artist.dominantLanguage || null,
    dominantType: artist.dominantType || null,
    bio: artist.bio ? JSON.parse(artist.bio) : null,
    dob: artist.dob || null,
    wiki: artist.wiki || null,
    fb: artist.fb || null,
    twitter: artist.twitter || null,
    availableLanguages: artist.availableLanguages || null,
    isRadioPresent: artist.isRadioPresent || null,
    image: createImageLinks(artist.image),
    topSongs: artist.topSongs?.map(formatSong) || null,
    topAlbums: artist.topAlbums?.map(formatAlbum) || null,
    singles: artist.singles?.map(formatSong) || null,
    similarArtist:
      artist.similarArtists?.map((similarArtist) => ({
        id: similarArtist.id,
        name: similarArtist.name,
        url: similarArtist.perma_url,
        image: createImageLinks(similarArtist.image_url),
        languages: similarArtist.languages
          ? JSON.parse(similarArtist.languages)
          : null,
        wiki: similarArtist.wiki,
        dob: similarArtist.dob,
        fb: similarArtist.fb,
        twitter: similarArtist.twitter,
        isRadioPresent: similarArtist.isRadioPresent,
        type: similarArtist.type,
        dominantType: similarArtist.dominantType,
        aka: similarArtist.aka,
        bio: similarArtist.bio ? JSON.parse(similarArtist.bio) : null,
        similarArtist: similarArtist.similar
          ? JSON.parse(similarArtist.similar)
          : null,
      })) || null,
  };
};
