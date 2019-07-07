import React from 'react';
import classes from './Form.css'
const Form = props => (
    <form onSubmit={props.submit}>
        <input type="text" name="city"  placeholder="City.." />
    </form>
)

export default Form;