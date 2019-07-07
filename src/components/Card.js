import React from 'react';
import classes from './Card.css'

const card = () => (
    <div className={classes.main}>
        <h1 className={classes.title}>Weather Finder App</h1>
        <h3 className={classes.description}>Get information about temperature and other things...</h3>
    </div>
)

export default card;