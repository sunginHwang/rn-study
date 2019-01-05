import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LineText from "./LineText";


export default class Seconds extends Component {


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <LineText name='Open up 성인 App.js to start working on your app!'/>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
});
