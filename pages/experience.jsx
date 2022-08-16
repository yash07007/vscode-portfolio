import ExperienceLoop from "../components/ExperienceLoop";
import styles from "../styles/ExperiencePage.module.css";
import { getExperience } from "./api/experience";


const ExperiencePage = ({experienceItems}) => {

    return (
        <div className={styles.container}>
            <p className={styles.line}><span className={styles.keyword}>import</span> <span className={styles.object}>experience</span></p>
            <p className={styles.line}><span className={styles.keyword}>import</span> <span className={styles.object}>date</span></p>
            <p className={styles.line}></p>
            {experienceItems.map((experience, index) => (
                <ExperienceLoop experience={experience} key={index} />
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const experienceItems = getExperience();

    return {
        props: { title: "Experience", experienceItems },
    };
}

export default ExperiencePage;
