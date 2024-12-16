/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:  process.env.DEPLOYED_GITHUB_PATH || ''
};

export default nextConfig;
