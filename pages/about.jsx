import styles from "../styles/AboutPage.module.css";
import { useState } from "react";
import { getEducation, getAchievements, getLeadership, getSkills } from "./api/about";
import HTMLTag from "../components/HTMLTag";
import HTMLSelfClosingTag from "../components/HTMLSelfClosingTag";
import HTMLList from "../components/HTMLList";

const AboutPage = ({ leadershipItems, achievementsItems, skillsTags, educationTags }) => {
    const [educationOpen, setEducationOpen] = useState(true);
    const [skillsOpen, setSkillsOpen] = useState(true);
    const [achievementsOpen, setAchievementsOpen] = useState(true);
    const [leadershipOpen, setLeadershipOpen] = useState(true);

    const unfoldAll = (e) => {
        e.preventDefault();
        setEducationOpen(true);
        setSkillsOpen(true);
        setAchievementsOpen(true);
        setLeadershipOpen(true);
    };

    const foldAll = (e) => {
        e.preventDefault();
        setEducationOpen(false);
        setSkillsOpen(false);
        setAchievementsOpen(false);
        setLeadershipOpen(false);
    };

    const unfoldEducation = (e) => {
        e.preventDefault();
        setEducationOpen(true);
        setSkillsOpen(false);
        setAchievementsOpen(false);
        setLeadershipOpen(false);
    };

    const unfoldSkills = (e) => {
        e.preventDefault();
        setEducationOpen(false);
        setSkillsOpen(true);
        setAchievementsOpen(false);
        setLeadershipOpen(false);
    };

    const unfoldAchievements = (e) => {
        e.preventDefault();
        setEducationOpen(false);
        setSkillsOpen(false);
        setAchievementsOpen(true);
        setLeadershipOpen(false);
    };

    const unfoldLeadership = (e) => {
        e.preventDefault();
        setEducationOpen(false);
        setSkillsOpen(false);
        setAchievementsOpen(false);
        setLeadershipOpen(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.foldBtns}>
                <button onClick={unfoldAll}>Unfold All</button>
                <button onClick={foldAll}>Fold All</button>
                <button onClick={unfoldEducation}>Education</button>
                <button onClick={unfoldSkills}>Skills</button>
                <button onClick={unfoldAchievements}>Achievements</button>
                <button onClick={unfoldLeadership}>Leadership</button>
            </div>
            <HTMLTag name="education" isOpen={educationOpen} setIsOpen={setEducationOpen}>
                {educationTags.map((tag, index) => (
                    <HTMLSelfClosingTag tag={tag} key={index} />
                ))}
            </HTMLTag>
            <p className={styles.line}></p>
            <HTMLTag name="skills" isOpen={skillsOpen} setIsOpen={setSkillsOpen}>
                {skillsTags.map((tag, index) => (
                    <HTMLSelfClosingTag tag={tag} key={index} />
                ))}
            </HTMLTag>
            <p className={styles.line}></p>
            <HTMLTag name="achievements" isOpen={achievementsOpen} setIsOpen={setAchievementsOpen}>
                <HTMLList items={achievementsItems} />
            </HTMLTag>
            <p className={styles.line}></p>
            <HTMLTag name="leadership" isOpen={leadershipOpen} setIsOpen={setLeadershipOpen}>
                <HTMLList items={leadershipItems} />
            </HTMLTag>
        </div>
    );
};

export async function getStaticProps() {
    const achievementsItems = getAchievements();
    const leadershipItems = getLeadership();
    const educationTags = getEducation();
    const skillsTags = getSkills();

    return {
        props: { title: "About", achievementsItems, leadershipItems, educationTags, skillsTags },
    };
}

export default AboutPage;
