import axios from "axios";


// const API_KEY = process.env.REACT_APP_API_KEY;
// const URL_WEATHER = process.env.REACT_APP_API_URL;

const API_KEY = process.env.REACT_APP_API_KEY;
const URL_WEATHER = process.env.REACT_APP_API_URL;

export const fetchWeatherData = async (query) => {
    try {
        // Check if the query is empty
        if (query.trim() === '') {
            console.log("Query cannot be empty");
            throw new Error("Query cannot be empty");
        }

        console.log(query);
        const { data } = await axios.get(URL_WEATHER, {
            params: {
                key: API_KEY,
                q: query,
                days: 7,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error fetching weather data", error);
        throw new Error("Error fetching weather data");
    }
}
