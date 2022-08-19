module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://www.github.io/yash07007/api/:path*",
            },
        ];
    },
    images: {
        domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "imgur.com"],
    },
};
