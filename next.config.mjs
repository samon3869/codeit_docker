/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
