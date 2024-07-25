import styles from "../styles/AboutPage.module.css";
import ChevronRight from "./icons/ChevronRight";

const HTMLTag = ({ name, isOpen, setIsOpen, children }) => {

    return (
        <>
        <div className={styles.containerTag}>
            <input
                type="checkbox"
                className={styles.checkbox}
                id={name + "-checkbox"}
                checked={isOpen}
                onChange={() => {if(window.innerWidth > 900) {setIsOpen(!isOpen)} else {setIsOpen(true)}}}
            />
            <label htmlFor={name + "-checkbox"}>
                <ChevronRight className={styles.chevron} style={isOpen ? { transform: "rotate(90deg)" } : {}} />
                <p className={styles.line + " " + styles.indent}>
                    &lt;<span className={styles.h4}>{name}</span>&gt;
                    <span style={isOpen ? { visibility: "hidden" } : {}} className={styles.fold}>
                        ...
                    </span>
                </p>
            </label>
            <div style={!isOpen ? { display: "none" } : {}}>
                <p className={styles.line}></p>
                {children}
                <p className={styles.line}></p>
            </div>
            <p className={styles.line}>
                &lt;<b className={styles.h5}>/</b>
                <span className={styles.h4}>{name}</span>&gt;
            </p>
        </div>
        </>
    );
};

export default HTMLTag;
