import { config } from "@/constants/config";
import type { Request, Response } from "express";

import { formatSong } from "@/helpers/song.helper";
import request from "@/services/request";
import { GetSongByIdResponse } from "@/types/song.type";

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
