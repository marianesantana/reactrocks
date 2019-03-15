
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import api from '../services/api';


export default class Main extends Component {
    static navigationOptions = {
        title: "Star Wars API"
    };

    state = {
        people: []
    };

    componentDidMount() {
        this.loadContent();
    }

    loadContent = async () => {
        const response = await api.get('/people');
        const { people } = response.data;
        this.setState({ people })
    };
  render() {
    return (
      <View>
        <Text>Characters:</Text>
        {this.state.people.map(peopleName => (
            <Text>{people.name} </Text>
            ))}
      </View>
    );
  }
}

