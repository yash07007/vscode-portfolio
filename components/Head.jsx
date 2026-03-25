import Head from "next/head";

const CustomHead = ({ title = "Yash Solanki" }) => {
    return (
        <Head>
            <title>{title}</title>
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
