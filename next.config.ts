const isProd = process.env.NODE_ENV === 'production';
const repo = 'edo-web'; // 👈 your repo name

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;