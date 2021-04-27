import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = '2e998125561d9b561b36380e3227c828';


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    try {
      const { data:{
        main:{ temp },
        weather
      }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      
      this.setState({ 
        isLoading: false,
        condition: weather[0].main,
        temp}
      );
    } catch(error) {
      console.log(error)
      Alert.alert('Weather Error',error.message);
    }
  };

  getLocation = async() => {
    try {
      //get location
      await Location.requestForegroundPermissionsAsync();
      
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);

      // get weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Cant find', 'Sad')
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
