import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import { getBio } from "./api/bio";

export default function HomePage({ bio }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <h1>I BUILD</h1>
                    <h1>WEBSITES</h1>
                </div>
                <div className={styles.foreground}>
                    <div className={styles.content}>
                        <h1 className={styles.name}>{bio.name}</h1>
                        <h6 className={styles.bio}>Full Stack Web Developer | OS Developer</h6>
                        <a
                            href="/Yash_Solanki_Resume_USC_2022.pdf"
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.button}>
                            Resume
                        </a>
                        <Link href="/contact">
                            <button className={styles.outlined}>Contact Me</button>
                        </Link>
                    </div>
                    <Illustration className={styles.illustration} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const bio = getBio();

    return {
        props: { title: "Home", bio },
    };
}
