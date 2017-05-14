import React, { Component, PropTypes } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, WebView} from 'react-native';

export default class Torso extends Component {
  static navigationOptions = {
    title: 'Torso',
  };
  state = {
      status: null,
    }
  render() {
    return (
      <View>
        <Text style={styles.instructions}>In Development</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  videoStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    marginVertical: 4
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
