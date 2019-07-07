import axios from 'axios';
export const getWeather = (city) => {
    return axios
        .get("https://api.weatherbit.io/v2.0/current?", {
            params: {
                key: process.env.REACT_APP_API_KEY,
                city: city,
                units: "M"
            }
        })
        .then(res => {
            return res.data.data[0];
        })
        .catch(err => console.log(err));
}

export default getWeather;
