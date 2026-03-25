import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import QuickOpen from "./QuickOpen";
import styles from "../styles/Layout.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    const { width } = useWindowDimensions();
    const [quickOpenVisible, setQuickOpenVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "p") {
                e.preventDefault();
                setQuickOpenVisible((v) => !v);
            }
            if (e.key === "Escape") {
                setQuickOpenVisible(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const isDesktop = width > 768;

    return (
        <>
            <Titlebar />
            <div className={styles.main}>
                {isDesktop && (
                    <>
                        <Sidebar />
                        <Explorer />
                    </>
                )}
                <div style={{ width: "100%" }}>
                    <Tabsbar />
                    <main className={styles.content} key={router.pathname}>
                        <div className="page-transition">{children}</div>
                    </main>
                </div>
            </div>
            <Bottombar />
            <QuickOpen isOpen={quickOpenVisible} onClose={() => setQuickOpenVisible(false)} />
        </>
    );
};

export default Layout;
