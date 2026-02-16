import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Optimizaciones de performance
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],
    optimizeCss: true,
  },
  
  // Comprimir CSS y JS
  compress: true,
};

export default nextConfig;
