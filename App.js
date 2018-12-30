import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LineText = ({
                      name
                  }) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text>Hello {name}!</Text>
        </View>
    )
};


export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <LineText name='Open up 성인 App.js to start working on your app!' />
                <LineText name='Open up HeaJin App.js to start working on your app!' />
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
    },
});

