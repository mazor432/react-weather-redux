import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Weather from './components/Weather';

import * as actions from "./store/actions";
import { connect } from 'react-redux';
import classes from './App.css';


class App extends Component {


  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(event.target.elements.city.value);

  }
  render() {
    console.log(this.props)
    return (
      <div className={classes.wrapper}>
        <div className={classes.card} >
          <Card />
        </div>
        <div className={classes.weather}>
          <Form submit={this.onSubmitHandler} />
          {
            this.props.cityInfo.error ? <p>We can not find...</p> : null
          }
          {this.props.cityInfo.cityName && this.props.cityInfo.cityName ?
            <Weather
              city={this.props.cityInfo.cityName}
              weatherIconCode={this.props.cityInfo.weatherIconCode}
              temperature={this.props.cityInfo.temperature}
              description={this.props.cityInfo.description}
              pressure={this.props.cityInfo.pressure}
              humidity={this.props.cityInfo.humidity}
              error={this.props.cityInfo.error}
            />
            : null
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cityInfo: state,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (city) => dispatch(actions.fetchWeather(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
