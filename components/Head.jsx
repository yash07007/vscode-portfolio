import Head from "next/head";

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Yash Solanki is an avid full stack web developer building websites and applications you'd love to use"
            />
            <meta
                name="keywords"
                content="yash solanki, yash, solanki, web developer portfolio, yash web developer, yash developer, mern stack, yash solanki portfolio, vscode-portfolio"
            />
            <meta property="og:title" content="Yash Solanki's Portfolio" />
            <meta
                property="og:description"
                content="A full-stack developer building websites that you'd like to use."
            />
            <meta property="og:image" content="" />
            <meta property="og:url" content="" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    title: "Yash Solanki",
};
