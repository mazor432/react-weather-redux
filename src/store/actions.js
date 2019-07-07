import * as actionTypes from "./actionTypes";
import getWeather from '../api';
export const fetchWeather = (city) => {
    return dispatch => {
        getWeather(city)
            .then(response => {
                dispatch(fetchWeatherSuccess(response));
            })
            .catch(
                error => {
                    dispatch(fetchWeatherFail(error))
                }
            )
    }
}

export const fetchWeatherSuccess = (data) => {
    return {
        type: actionTypes.FETCH_WEATHER_SUCCES,
        data: data
    }
}

export const fetchWeatherFail = (err) => {
    return {
        type: actionTypes.FETCH_WEATHER_FAIL,
        error: err
    }
}
