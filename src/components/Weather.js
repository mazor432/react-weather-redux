import React from 'react';
import classes from './Weather.css'

const weather = (props) => (
    <div className={classes.main}>
        <p className={classes.item}>
            City: <span className={classes.info}> {props.city}</span>
        </p>
        <img className={classes.icon} src={`https://www.weatherbit.io/static/img/icons/${props.weatherIconCode}.png`} alt="" />
        <p className={classes.item}>Temperature: <span className={classes.info}> {props.temperature}</span> </p>
        <p className={classes.item}>Description: <span className={classes.info}>{props.description}</span> </p>
        <p className={classes.item}>Pressure: <span className={classes.info}>{props.pressure}</span> </p>
        <p className={classes.item}>Humidity: <span className={classes.info}>{props.humidity}</span> </p>
    </div>
);

export default weather;