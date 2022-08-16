import { getPublications } from "./api/publications";
import styles from "../styles/PublicationsPage.module.css";
import { getBio } from "./api/bio";

const PublicationsPage = ({ publications, bio }) => {
    return (
        <div className={styles.container}>
            <div className={styles.btns}>
                <a href={bio.google_scholar} target="_blank">Google Scholar</a>
            </div>
            {publications.map((publication, index) => (
                <div key={index}>
                    <p>&#123;</p>
                        {Object.keys(publication).map((key, i) => (
                            <p key={i}><span className={styles.key}>"{key}"</span>: <span className={styles.value}>"{publication[key]}"</span>,</p>
                        ))}
                    <p>&#125;,</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const publications = getPublications();
    const bio = getBio();
    
    return {
        props: { title: "Publications", publications, bio },
    };
}

export default PublicationsPage;
