import { config } from "@/constants/config";
import type { Request, Response } from "express";

import { formatLyrics, formatSong } from "@/helpers/song.helper";
import request from "@/services/request";
import { GetSongByIdResponse, LyricsAPIResponse } from "@/types/song.type";

export const getSongById = async (req: Request, res: Response) => {
  const { songId } = req.params;

  try {
    const response = await request<GetSongByIdResponse>(
      config.endpoints.songs.id,
      {
        pids: songId,
      }
    );

    const data = response.data.songs.map(formatSong);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getSongLyrics = async (req: Request, res: Response) => {
  const { songId } = req.params;

  try {
    const response = await request<LyricsAPIResponse>(config.endpoints.lyrics, {
      lyrics_id: songId,
    });

    const data = formatLyrics(response.data);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
