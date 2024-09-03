import { config } from "@/constants/config";
import { formatPlaylist } from "@/helpers/playlist.helper";
import request from "@/services/request";
import { PlaylistAPIResponse } from "@/types/playlist.type";
import { Request, Response } from "express";

export const getPlaylist = async (req: Request, res: Response) => {
  const { playlistId } = req.params;
  const { limit, page } = req.query;
  try {
    const response = await request<PlaylistAPIResponse>(
      config.endpoints.playlists.id,
      {
        listid: playlistId,
        p: page,
        n: limit,
      }
    );

    const data = formatPlaylist(response.data);

    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
