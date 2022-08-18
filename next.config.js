module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:4000/:path*",
            },
        ];
    },
    images: {
        domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "imgur.com"],
    },
};
