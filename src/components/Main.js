
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import api from '../services/api';


export default class Main extends Component {
    static navigationOptions = {
        title: "Star Wars API"
    };

    state = {
        docs: []
    };

    componentDidMount() {
        this.loadPeopleName();
    }

    loadPeopleName = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;
        console.log(docs);
        // this.setState({ people })
    };
  render() {
    return (
      <View>
        <Text>Characters:</Text>
      </View>
    );
  }
}

