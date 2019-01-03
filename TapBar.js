import React from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator ,createAppContainer} from "react-navigation";
import {StyleSheet, View, Image, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
import First from './First';
import Seconds from './Seconds';
import Third from './Third';

const TapBar = createBottomTabNavigator({
    First: First,
    Second:Seconds,
    Third:Third
});


export default createAppContainer(TapBar);



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