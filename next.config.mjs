/** Static export: deploy the /out folder anywhere (Vercel, Netlify, GitHub Pages...). */
const nextConfig = { output: "export", images: { unoptimized: true }, trailingSlash: true };
export default nextConfig;
