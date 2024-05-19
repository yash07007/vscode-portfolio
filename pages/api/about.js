import data from "./resume.json";

export const getEducation = () => {
    let educationTags = [];
    data.education.forEach((university) => {
        let universityTag = {};
        universityTag.name = "university";
        universityTag.attributes = [];
        universityTag.attributes.push({ name: "name", value: university.name });
        universityTag.attributes.push({ name: "course", value: university.course });
        universityTag.attributes.push({ name: "graduation", value: university.graduation });
        universityTag.attributes.push({ name: "gpa", value: university.name });
        educationTags.push(universityTag);
    });

    return educationTags;
};

export const getLeadership = () => {
    let leadershipItems = data.leadership;

    return leadershipItems;
};

export const getSkills = () => {
    let skillsTags = [];
    data.skills.forEach((skill) => {
        let skillTag = {};
        skillTag.name = skill.title;
        skillTag.attributes = [];
        skill.categories.forEach((category) => {
            skillTag.attributes.push({ name: category.name, value: category.value });
        });
        skillsTags.push(skillTag);
    });

    return skillsTags;
};

export const getAchievements = () => {
    let achievementsItems = data.achievements;

    return achievementsItems;
};

export default (req, res) => {
    const education = getEducation();
    const achievements = getAchievements();
    const leadership = getLeadership();
    const skills= getSkills();
    res.json({education, achievements, leadership, skills});
};
