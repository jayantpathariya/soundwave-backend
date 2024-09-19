import { Request, Response } from "express";

import { config } from "@/constants/config";
import { formatArtist, formatArtistSongs } from "@/helpers/artist.helper";
import request from "@/services/request";
import { ArtistAPIResponse, ArtistSongAPIResponse } from "@/types/artist.type";

export const getArtistById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { songCounts, albumCounts } = req.query;
  const page = req.query?.page ?? 1;
  const sortOrder = req.query?.sortOrder ?? "asc";
  const sortBy = req.query?.sortBy ?? "popularity";

  try {
    const response = await request<ArtistAPIResponse>(
      config.endpoints.artists.id,
      {
        artistId: id,
        n_song: songCounts,
        n_album: albumCounts,
        page,
        sort_order: sortOrder,
        category: sortBy,
      }
    );

    const data = formatArtist(response.data);

    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getArtistSongs = async (req: Request, res: Response) => {
  const { id } = req.params;
  const page = req.query?.page ?? 1;
  const sortOrder = req.query?.sortOrder ?? "asc";
  const sortBy = req.query?.sortBy ?? "popularity";

  try {
    const response = await request<ArtistSongAPIResponse>(
      config.endpoints.artists.songs,
      {
        artistId: id,
        page,
        sort_order: sortOrder,
        category: sortBy,
      }
    );

    const data = formatArtistSongs(response.data);

    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
