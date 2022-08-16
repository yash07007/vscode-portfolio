import data from "./resume.json";

export const getProjects = () => {
    return data.projects;
};

export default (req, res) => {
    const projects = getProjects();
    res.json(projects);
};
