import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import axios from 'axios';

class ClientNetworkHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

    }

    componentDidMount() {
      this.asyncCallFunc();
    }

    asyncCallFunc = async () =>{
        const result = await axios.get('https://facebook.github.io/react-native/movies.json');
        await this.setState({text: result.data.description});
    };


    render() {
        return (
            <View style={styles.asyncContainer}>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

export default ClientNetworkHandle;


const styles = StyleSheet.create({
    asyncContainer: {
        flex: 1,
       width:width-20,

    },
});