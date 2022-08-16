import styles from "../styles/ExperiencePage.module.css";
import { useState } from "react";
import ChevronRight from "./icons/ChevronRight";

const ExperienceLoop = ({experience}) => {

    const [isOpen, setIsOpen] = useState(false);
    let end;
    if(experience.endDate == "date.now()") {
        end = <span><span className={styles.object}>date</span>.now()</span>
    }
    else {
        end = <span className={styles.string}>"{experience.endDate}"</span>
    }

    return (
        <>
        <p className={styles.line}><span className={styles.keyword}>while</span>(<span className={styles.object}>date</span>.between(<span className={styles.string}>"{experience.startDate}"</span>, {end})):</p>
        <p className={styles.line}></p>
        <p className={styles.line}><span className={styles.indent}>company = <span className={styles.string}>"{experience.company}"</span></span></p>
        <p className={styles.line}><span className={styles.indent}>location = <span className={styles.string}>"{experience.location}"</span></span></p>
        <p className={styles.line}><span className={styles.indent}>role = <span className={styles.string}>"{experience.role}"</span></span></p>
        <p className={styles.line}></p>
        <input
            type="checkbox"
            className={styles.checkbox}
            id={"checkbox-" + experience.id}
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
        />
        <label htmlFor={"checkbox-" + experience.id}>
                <div className={styles.line}>
                    <ChevronRight className={styles.chevron} style={isOpen ? { transform: "rotate(90deg)" } : {}} />
                    <p className={styles.comment}><span className={styles.indent}># <span style={isOpen ? { display: "none" } : {}}>Unfold for </span>Summary</span></p>
                    <span style={isOpen ? { visibility: "hidden" } : {}} className={styles.fold}>
                        ...
                    </span>
                </div>
            </label>
        <div style={!isOpen ? { display: "none" } : {}}>
        {experience.summary.map((point, index) => (
            <div key={index}>
                <p className={styles.line}></p>
                <div className={styles.print}><p className={styles.line}><span className={styles.indent}><span className={styles.keyword}>print</span>(<span className={styles.string}>"{point}"</span>)</span></p></div>
            </div>
        ))}
        </div>
        <p className={styles.line}></p> 
        </>
    );
};

export default ExperienceLoop;
