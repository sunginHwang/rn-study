import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LineText from './LineText';



export default class App extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <LineText name='Open up 성인 App.js to start working on your app!' />
                <LineText name='Open up HyeJin App.js to start working on your app!' />
                <LineText name='Open up 상민 sApp.js to start working on your app!' />
                <Image source={pic} style={{width: 500, height: 110}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

