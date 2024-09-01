import { config } from "@/constants/config";
import axios, { AxiosInstance, AxiosResponse } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: config.baseURL,
  params: {
    _format: "json",
    _marker: 0,
    ctx: "web6dot0",
    n: 100,
  },
});

interface ApiParams {
  [key: string]: any;
}

const api = async (
  endpoint: string,
  params?: ApiParams,
  isVersion4: boolean = true
): Promise<AxiosResponse<any>> => {
  try {
    const v4 = isVersion4 ? { api_version: 4 } : undefined;

    const response = await client({
      params: {
        __call: endpoint,
        ...v4,
        ...params,
      },
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log("[API]", error);
    return Promise.reject(error);
  }
};

export default api;
