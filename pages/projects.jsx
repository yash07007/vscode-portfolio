import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
    return (
        <>
            <h3>Some of the Stuff I've Built!</h3>
            <div className={styles.container}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
};

export async function getStaticProps() {
    const projects = getProjects();

    return {
        props: { title: "Projects", projects },
    };
}

export default ProjectsPage;
