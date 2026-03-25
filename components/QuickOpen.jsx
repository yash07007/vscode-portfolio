import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/QuickOpen.module.css";

const items = [
    { name: "home.jsx", path: "/", icon: "react_icon.svg" },
    { name: "about.html", path: "/about", icon: "html_icon.svg" },
    { name: "experience.py", path: "/experience", icon: "python_icon.svg" },
    { name: "projects.js", path: "/projects", icon: "js_icon.svg" },
    { name: "publications.json", path: "/publications", icon: "json_icon.svg" },
    { name: "github.md", path: "/github", icon: "markdown_icon.svg" },
    { name: "contact.css", path: "/contact", icon: "css_icon.svg" },
    { name: "settings", path: "/settings", icon: "vscode_icon.svg" },
];

const QuickOpen = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const router = useRouter();

    const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        setQuery("");
        setSelectedIndex(0);
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const navigate = (path) => {
        router.push(path);
        onClose();
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && filtered[selectedIndex]) {
            navigate(filtered[selectedIndex].path);
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    placeholder="Search files by name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className={styles.results}>
                    {filtered.map((item, index) => (
                        <div
                            key={item.path}
                            className={`${styles.result} ${index === selectedIndex ? styles.selected : ""}`}
                            onClick={() => navigate(item.path)}
                            onMouseEnter={() => setSelectedIndex(index)}>
                            <Image src={`/${item.icon}`} alt={item.name} height={16} width={16} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className={styles.noResults}>No matching files</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuickOpen;
