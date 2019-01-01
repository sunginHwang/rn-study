import {StyleSheet, TextInput, Text, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import HalfView from './HalfView';
const {width} = Dimensions.get('window');

export default class InputHandle extends Component {

    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="텍스트를 입력해봐요.!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.input}>{this.state.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: width-20,
        height: 30,
        margin:10
    },
    input: {
        padding:10,
        height:30,
        backgroundColor:'#97a4e8'
    },
});
