import data from "./resume.json";

export const getPublications = () => {
    return data.publications;
};

export default (req, res) => {
    const publications = getPublications();
    res.json(publications);
};
