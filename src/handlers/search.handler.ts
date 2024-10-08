import { config } from "@/constants/config";
import { formatArtistMap } from "@/helpers/artist.helper";
import {
  formatSearch,
  formatSearchAlbum,
  formatSearchPlaylist,
} from "@/helpers/search.helper";
import { formatSong } from "@/helpers/song.helper";
import request from "@/services/request";
import {
  SearchAlbumAPIResponse,
  SearchAPIResponse,
  SearchArtistAPIResponse,
  SearchPlaylistAPIResponse,
  SearchSongAPIResponse,
} from "@/types/search.type";
import { Request, Response } from "express";

export const searchAll = async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    const response = await request<SearchAPIResponse>(
      config.endpoints.search.all,
      {
        query: query,
      }
    );

    const data = formatSearch(response.data);

    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const searchSongs = async (req: Request, res: Response) => {
  const query = req.query.query;
  const page = req.query?.page ?? 1;
  const limit = req.query?.limit ?? 10;

  try {
    const response = await request<SearchSongAPIResponse>(
      config.endpoints.search.songs,
      {
        q: query,
        p: page,
        n: limit,
      }
    );

    const data = response.data;

    return res.status(200).json({
      data: {
        total: data.total,
        start: data.start,
        result: data.results?.map(formatSong).slice(0, +limit) ?? [],
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const searchAlbums = async (req: Request, res: Response) => {
  const query = req.query.query;
  const page = req.query?.page ?? 1;
  const limit = req.query?.limit ?? 10;

  try {
    const response = await request<SearchAlbumAPIResponse>(
      config.endpoints.search.albums,
      {
        q: query,
        p: page,
        n: limit,
      }
    );

    const data = formatSearchAlbum(response.data);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const searchArtists = async (req: Request, res: Response) => {
  const query = req.query.query;
  const page = req.query?.page ?? 1;
  const limit = req.query?.limit ?? 10;

  try {
    const response = await request<SearchArtistAPIResponse>(
      config.endpoints.search.artists,
      {
        q: query,
        p: page,
        n: limit,
      }
    );

    const data = response.data;

    return res.status(200).json({
      data: {
        total: data.total,
        start: data.start,
        results: data.results?.map(formatArtistMap),
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const searchPlaylists = async (req: Request, res: Response) => {
  const query = req.query.query;
  const page = req.query?.page ?? 1;
  const limit = req.query?.limit ?? 10;

  try {
    const response = await request<SearchPlaylistAPIResponse>(
      config.endpoints.search.playlists,
      {
        q: query,
        p: page,
        n: limit,
      }
    );

    const data = formatSearchPlaylist(response.data);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
