import { Request, Response } from "express";

import { config } from "@/constants/config";
import { formatAlbum } from "@/helpers/album.helper";
import request from "@/services/request";
import { AlbumAPIResponse } from "@/types/album.type";

export const getAlbumById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await request<AlbumAPIResponse>(
      config.endpoints.albums.id,
      {
        albumid: id,
      }
    );

    const data = formatAlbum(response.data);

    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
