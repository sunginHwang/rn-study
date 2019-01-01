import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions} from 'react-native';
import LineText from './LineText';
import HalfView from './HalfView';
import InputHandle from './InputHandle';
import ClientNetworkHandle from './ClientNetworkHandle';
import AnimationComponent from './AnimationComponent';
const {width} = Dimensions.get('window');

export default class App extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Image source={pic} style={{width: 500, height: 400}}/>
                <ClientNetworkHandle/>
                <InputHandle/>
                <AnimationComponent style={{width:width , height:3}}>
                    <HalfView msg='FadeInHalfViewTest'/>
                </AnimationComponent>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}>
                    <LineText name='Open up 성인 App.js to start working on your app!'/>
                    <LineText name='Open up HyeJin App.js to start working on your app!'/>
                    <LineText name='Open up 상민 sApp.js to start working on your app!'/>
                    <HalfView msg='HalfViewTest'/>
                </ScrollView>

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
    scrollContainer: {
        marginTop:60,
        alignItems: 'center',
        backgroundColor: '#666',
        justifyContent: 'center',
    }
});

