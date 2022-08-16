import data from "./resume.json";

export const getExperience = () => {
    return data.experience;
};

export default (req, res) => {
    const experience = getExperience();
    res.json(experience);
};
