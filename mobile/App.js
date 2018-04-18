import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      state: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/', {
      method: 'GET',
    })
      .then(resp => {
        resp.json()
          .then((resp) => {
            this.setState({ state: resp.state == 0 })
          })
      })
  }

  sendSerial() {
    const formData = new FormData();
    formData.append("serial", "b'l'");

    fetch('http://localhost:5000/', {
      method: 'POST',
      mode: 'cors',
      body: formData
    })
      .then(resp => {
        resp.json()
          .then((resp) => {
            this.setState({ state: resp.state == 0 })
          })
      })

    console.log(this.state)

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={this.state.state ? styles.centerButtonActive : styles.centerButton}
          onPress={() => { this.sendSerial() }}>
        >
          <Icon name="lightbulb-outline" size={30} color={this.state.state ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  centerButton: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 0 },
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#d5d5d5',
    position: 'absolute',
    borderRadius: 100,
  },
  centerButtonActive: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 0 },
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#314199',
    position: 'absolute',
    borderRadius: 100,
  }
});
