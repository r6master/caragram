import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: 'Thunder',
      subTitle: 'Stay at home'
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: 'Drizzle',
      subTitle: 'its Drizzle'
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: 'Rain',
      subTitle: 'bring umbrella'
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: 'Snow',
      subTitle: 'Wow be careful'
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: 'Hail',
      subTitle: 'Stay at home'
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: 'Clear',
      subTitle: 'Play outside'
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: 'Clouds',
      subTitle: 'breezeee cloudy'
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: 'Mist',
      subTitle: 'Safe driving'
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: 'Dust',
      subTitle: 'Wear a mask'
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    }
  };

export default function Weather({ temp, condition }) {
    console.log(condition)
    return (
    <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
        <StatusBar barStyle='light-content' />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
            size={96}
            name={weatherOptions[condition].iconName}
            color="white"
            />
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
        </View>
    </LinearGradient>

    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm', 
        'Drizzle', 
        'Rain', 
        'Snow', 
        'Atmosphere', 
        'Clear', 
        'Clouds', 
        'Haze', 
        'Mist'
    ]).isRequired
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: '300',
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    },
    textContainer: {
        paddingHorizontal:20,
        alignItems: 'flex-start'
    }
});