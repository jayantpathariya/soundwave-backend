import { Request, Response } from "express";

import { config } from "@/constants/config";
import { formatHome } from "@/helpers/home.helper";
import request from "@/services/request";
import { HomeAPIResponse } from "@/types/home.type";

export const getHomeData = async (req: Request, res: Response) => {
  try {
    const response = await request<HomeAPIResponse>(config.endpoints.home);

    const data = formatHome(response.data);

    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
