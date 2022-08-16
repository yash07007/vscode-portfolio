import data from "./resume.json";

export const getBio = () => {
    return data.bio;
};

export default (req, res) => {
    const bio = getBio();
    res.json(bio);
};
