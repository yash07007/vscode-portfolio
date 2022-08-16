import styles from "../styles/AboutPage.module.css";
import { useState } from "react";

const HTMLSelfClosingTag = ({ tag }) => {
    return (
        <>
            <div className={styles.tag}>
                <p className={styles.line}>
                    &lt;<b className={styles.h4}>{tag.name}</b>
                </p>
                {tag.attributes.map((attribute, index) => (
                    <p className={styles.line} key={index}>
                        <span>{attribute.name}</span>="{attribute.value}"
                    </p>
                ))}
                <p className={styles.line}>
                    <b className={styles.h5}>/</b>&gt;
                </p>
            </div>
        </>
    );
};

export default HTMLSelfClosingTag;
