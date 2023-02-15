import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
    {
        id: nanoid(),
        text: "Movies Page",
        link: "/movies"
    },
    {
        id: nanoid(),
        text: "Movies Details Page",
        link: "/movies/:movieId"
    },
];

export default items;
