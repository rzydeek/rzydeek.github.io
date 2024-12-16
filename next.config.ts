/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:  process.env.DEPLOYED_GITHUB_PATH || ''
    
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
