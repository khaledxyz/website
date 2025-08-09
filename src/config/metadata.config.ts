import { Metadata } from "next";
import { siteConfig } from "./site.config";

export const metadata: Metadata = {
  title: `${siteConfig.title} | ${siteConfig.role}`,
  description: siteConfig.description,
  authors: [{ name: "khaledxyz", url: "https://khaledxyz.com" }],
};
