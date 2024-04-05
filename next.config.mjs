/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'server', // Configuration pour le rendu dynamique
    images: {
        domains: [
            'avatar.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com'
        ]
    },
    experimental: {
        appDir: true // Activation du répertoire "app"
    }
};

export default nextConfig;
