import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`)
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("Error fetching data", error);
        return [];
}
}