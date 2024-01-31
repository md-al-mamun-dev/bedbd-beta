// const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {  
    transpilePackages: ['lucide-react'], 
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 's3-alpha-sig.figma.com',
              pathname: '**',
            },
          ],
        // domains: ['s3-alpha-sig.figma.com'],
    },
    // webpack: (config, { isServer }) => {
    //     config.resolve.alias['@public'] = path.join(__dirname, 'public');
    //     return config;
    //   },
}

module.exports = nextConfig
