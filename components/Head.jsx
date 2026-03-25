import Head from "next/head";
import { useEffect, useState } from "react";

const themeColors = {
    "github-dark": "#f9826c",
    dracula: "#bd93f9",
    "ayu-dark": "#e6b450",
    "ayu-mirage": "#e6b450",
    nord: "#88c0d0",
    "night-owl": "#5f7e97",
};

function generateFavicon(color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#1e1e1e"/><text x="50" y="68" font-size="55" font-family="monospace" font-weight="bold" fill="${color}" text-anchor="middle">YS</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const CustomHead = ({ title = "Yash Solanki" }) => {
    const [favicon, setFavicon] = useState("/favicon.ico");

    useEffect(() => {
        const updateFavicon = () => {
            const theme = document.documentElement.getAttribute("data-theme") || "github-dark";
            const color = themeColors[theme] || themeColors["github-dark"];
            setFavicon(generateFavicon(color));
        };

        updateFavicon();

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === "data-theme") {
                    updateFavicon();
                }
            }
        });
        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
            <meta
                name="description"
                content="Yash Solanki — Software Engineer specializing in wireless protocol design, satellite communication, and systems programming."
            />
            <meta
                name="keywords"
                content="yash solanki, software engineer, wireless protocol, satellite communication, mac layer, systems programming, vscode-portfolio"
            />
            <meta property="og:title" content="Yash Solanki's Portfolio" />
            <meta
                property="og:description"
                content="Software Engineer specializing in wireless protocol design, satellite communication, and systems programming."
            />
            <meta property="og:url" content="https://www.yash-solanki.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;
