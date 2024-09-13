import { config } from "@/constants/config";
import { formatSearch } from "@/helpers/search.helper";
import request from "@/services/request";
import { SearchAPIResponse } from "@/types/search.type";
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

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
