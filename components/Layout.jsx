import { Analytics } from "@vercel/analytics/react"
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    return { width: 0, height: 0 };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const Layout = ({ children }) => {
    const { height, width } = useWindowDimensions();

    return (
        <>
            <Analytics/>
            <Titlebar />
            {width > 100 && (
                <div className={styles.main}>
                    <Sidebar />
                    <Explorer />
                    <div style={{ width: "100%" }}>
                        <Tabsbar />
                        <main className={styles.content}>{children}</main>
                    </div>
                </div>
            )}
            {width <= 100 && width > 0 && (
                <div className={styles.main}>
                    <div style={{ width: "100%" }}>
                        <main className={styles.nocontent}>
                            <Image src="/desktop_icon.svg" height={100} width={100} />
                            <h2>Please visit desktop site for best experience!</h2>
                        </main>
                    </div>
                </div>
            )}
            <Bottombar />
        </>
    );
};

export default Layout;
