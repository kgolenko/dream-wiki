import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.dreamrusttop.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(config);
