import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, ActivityIndicator} from 'react-native';
const {width} = Dimensions.get('window');

import axios from 'axios';

class ClientNetworkHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '',isLoading : true};

    }

    componentDidMount() {
      this.asyncCallFunc();
    }

    asyncCallFunc = async () =>{
        const result = await axios.get('https://facebook.github.io/react-native/movies.json');
        await this.setState({text: result.data.description, isLoading: false});
    };


    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

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