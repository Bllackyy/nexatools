import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexatools-tau.vercel.app";

  return [
    {
      url: base,
      priority: 1,
    },

    {
      url: `${base}/tools`,
      priority: 0.9,
    },

    {
      url: `${base}/tools/password-generator`,
    },

    {
      url: `${base}/tools/qr-generator`,
    },

    {
      url: `${base}/tools/json-formatter`,
    },

    {
      url: `${base}/tools/word-counter`,
    },

    {
      url: `${base}/tools/base64`,
    },

    {
      url: `${base}/tools/image-to-pdf`,
    },

    {
      url: `${base}/tools/image-compressor`,
    },

    {
      url: `${base}/tools/uuid-generator`,
    },

    {
      url: `${base}/tools/timestamp-converter`,
    },

    {
      url: `${base}/tools/text-case-converter`,
    },
  ];
}