import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation }) {


  const [ciudad, setCiudad] = useState("Ciudad");

  const [pais, setPais] = useState("Pais");

  const [actual, setActual] = useState("temp");

  const [cielo, setCielo] = useState("Cielo");

  const [min, setMin] = useState("Minima");

  const [max, setMax] = useState("Maxima");

  useEffect(() => {

              fetch("http://api.openweathermap.org/data/2.5/weather?q=Quilmes&appid=9ce957a489296e7f8274e7a523fcc210&lang=es&units=metric")
              .then(response => response.json())
              .then((responseJson)=> {

                setCiudad("Quilmes")

                setCielo(responseJson.weather[0].main)

                setActual(responseJson.main.temp)

                setMin(responseJson.main.temp_min)

                setMax(responseJson.main.temp_max)

                setPais(responseJson.sys.country)

              })
  
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Text style={styles.titulo}>Clima actual en el mundo</Text>

          <Picker
            selectedValue={ciudad}
            style={{ height: 50, width: 150, backgroundColor: "beige" }}
            onValueChange={(itemValue, itemIndex) =>{

              setCiudad(itemValue)

              fetch("http://api.openweathermap.org/data/2.5/weather?q="+itemValue+"&appid=9ce957a489296e7f8274e7a523fcc210&lang=es&units=metric")
              .then(response => response.json())
              .then((responseJson)=> {

                setCielo(responseJson.weather[0].main)

                setActual(responseJson.main.temp)

                setMin(responseJson.main.temp_min)

                setMax(responseJson.main.temp_max)

                setPais(responseJson.sys.country)

              })


            }}
          >
            <Picker.Item label="Quilmes" value="Quilmes" />
            <Picker.Item label="Montevideo" value="Montevideo" />
            <Picker.Item label="Santiago" value="Santiago" />
            <Picker.Item label="Brasilia" value="Brasilia" />
            <Picker.Item label="Asuncion" value="Asuncion" />
            <Picker.Item label="Lima" value="Lima" />
            <Picker.Item label="Caracas" value="Caracas" />
            <Picker.Item label="Quito" value="Quito" />
            <Picker.Item label="Havana" value="Havana" />
            <Picker.Item label="Monterrey" value="Monterrey" />
            <Picker.Item label="Miami" value="Miami" />
            <Picker.Item label="Paris" value="Paris" />
            <Picker.Item label="Milan" value="Milan" />
            <Picker.Item label="Madrid" value="Madrid" />
            <Picker.Item label="Munich" value="Munich" />
            <Picker.Item label="Liverpool" value="Liverpool" />
            <Picker.Item label="Delhi" value="Delhi" />
            <Picker.Item label="Sydney" value="Sydney" />
            <Picker.Item label="Tokyo" value="Tokyo" />
            <Picker.Item label="Dakar" value="Dakar" />
            <Picker.Item label="Toronto" value="Toronto" />
          </Picker>

          <Text style={styles.lugar}>{ciudad}, {pais}</Text>

          <Text style={styles.actual}>{actual}°c</Text>

          <Text style={styles.lugar}>{cielo}</Text>

          <Text style={styles.lugar}>{min}°c/{max}°c</Text>



        </View>

      </ScrollView>

    </View>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({

  actual: {
    fontSize: 68,
    color: '#f2f2f2',
    textAlign: 'center',
    marginTop: 10,
  },

  lugar: {
    fontSize: 24,
    color: '#f2f2f2',
    textAlign: 'center',
    marginTop: 20,
  },

  titulo: {
    fontSize: 30,
    color: '#f2f2f2',
    textAlign: 'center',
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#0f3c85',
  },

  contentContainer: {
    paddingTop: 30,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

});
