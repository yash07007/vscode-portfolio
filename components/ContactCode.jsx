import styles from "../styles/ContactCode.module.css";

const ContactCode = ({contactItems}) => {
    return (
        <div className={styles.code}>
            <p className={styles.line}>
                <span className={styles.className}>.socials</span> &#123;
            </p>
            {contactItems.slice(0, 8).map((item, index) => (
                <p className={styles.line} key={index}>
                    <span className={styles.property}>&nbsp;&nbsp;&nbsp;{item.social}</span>:{" "}
                    <span className={styles.property}>url</span>
                    (
                    <a href={item.href} target="_blank" rel="noopener">
                        "{item.link}"
                    </a>
                    );
                </p>
            ))}
            {contactItems.slice(8, contactItems.length).map((item, index) => (
                <p className={styles.line} key={index}>
                    <span className={styles.property}>&nbsp;&nbsp;&nbsp;{item.social}</span>:{" "}
                    <span className={styles.property}>url</span>
                    (
                    <a href={item.href} target="_blank" rel="noopener">
                        "{item.link}"
                    </a>
                    );
                </p>
            ))}
            <p className={styles.line}>&#125;</p>
        </div>
    );
};

export default ContactCode;
