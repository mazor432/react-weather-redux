import * as actionTypes from "./actionTypes";
const initialState = {
    cityName: '',
    lat: '',
    lon: '',
    weatherIconCode: null,
    temperature: null,
    description: null,
    pressure: null,
    humidity: null,
    wind: null,
    sunset: null,
    sunrise: null,
    error: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER_SUCCES:
            return {
                ...state,
                cityName: action.data.city_name,
                lat: action.data.lat,
                lon: action.data.lon,
                weatherIconCode: action.data.weather.icon,
                temperature: action.data.temp,
                description: action.data.weather.description,
                pressure: action.data.pres,
                humidity: action.data.rh,
                wind: action.data.wind_cdir_full,
                sunset: action.data.sunset,
                sunrise: action.data.sunrise,
                error: false
            }
        case actionTypes.FETCH_WEATHER_FAIL:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default reducer;

