import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import React, {Component} from 'react';

const {width} = Dimensions.get('window');
export default class HalfView extends Component {



    render() {
        const targetOs = Platform.OS === 'ios' ? 'ios' : 'android';

        return (
            <View style={styles.halfViewWrapper}>
                <View style={styles.halfView}><Text>{targetOs + ' '+ this.props.msg}</Text></View>
                <View style={styles.halfView}><Text>{targetOs + ' '+ this.props.msg}</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    halfViewWrapper: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center'
    },
    halfView: {
        width: width / 2,
        height: 30,
        ...Platform.select({
            ios: {
                backgroundColor: 'skyblue',
            },
            android: {
                backgroundColor: 'blue',
            },
        }),
        color:'#fff',
        alignItems: 'center'
    },
});
