import { cipher, util } from "node-forge";

// create image links for different resolutions
export const createImageLinks = (link: string) => {
  if (!link) return [];

  const qualities = ["50x50", "150x150", "500x500"];

  return (
    qualities.map((quality) => ({
      quality,
      url: link.includes("150x150")
        ? link.replace("150x150", quality)
        : link.replace("50x50", quality),
    })) || false
  );
};

export const createDownloadLinks = (encryptedMediaUrl: string) => {
  if (!encryptedMediaUrl) return [];
  const url = decodeURIComponent(encryptedMediaUrl.replaceAll(" ", "+"));

  const qualities = [
    { id: "_12", bitrate: "12kbps" },
    { id: "_48", bitrate: "48kbps" },
    { id: "_96", bitrate: "96kbps" },
    { id: "_160", bitrate: "160kbps" },
    { id: "_320", bitrate: "320kbps" },
  ];

  const key = "38346591";
  const iv = "00000000";

  const encrypted = util.decode64(url);
  const decipher = cipher.createDecipher(
    "DES-ECB",
    util.createBuffer(key, "utf8")
  );

  decipher.start({ iv: util.createBuffer(iv, "utf8") });
  decipher.update(util.createBuffer(encrypted));
  decipher.finish();

  const decryptedLink = decipher.output.getBytes();

  const links =
    qualities.map((quality) => ({
      quality: quality.bitrate,
      url: decryptedLink.replace("_96", quality.id),
    })) || false;

  return links;
};
