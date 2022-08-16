import styles from "../styles/AboutPage.module.css";

const HTMLList = ({ items }) => {
    return (
        <>
            <div className={styles.tag}>
                <p className={styles.line}>
                    &lt;<b className={styles.h4}>ul</b>&gt;
                </p>
                <div className={styles.tag}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <p className={styles.line + " " + styles.indent}>
                                &lt;<b className={styles.h4}>li</b>&gt;
                            </p>
                            <p className={styles.line + " " + styles.indent2}>{item}</p>
                            <p className={styles.line + " " + styles.indent}>
                                &lt;<b className={styles.h5}>/</b>
                                <b className={styles.h4}>li</b>&gt;
                            </p>
                        </div>
                    ))}
                </div>
                <p className={styles.line}>
                    &lt;<b className={styles.h5}>/</b>
                    <b className={styles.h4}>ul</b>&gt;
                </p>
            </div>
        </>
    );
};

export default HTMLList;
