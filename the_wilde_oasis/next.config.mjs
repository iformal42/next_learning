/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tywpqvelelgiwicyjchs.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/avatar/**', // Wildcard for all subpaths
            },
        ],
    },
};

export default nextConfig;
