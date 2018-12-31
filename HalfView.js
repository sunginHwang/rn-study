import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {Component} from 'react';

const {width} = Dimensions.get('window');
export default class HalfView extends Component {


    render() {
        return (
            <View style={styles.halfViewWrapper}>
                <View style={styles.halfView}><Text>1{this.props.msg}</Text></View>
                <View style={styles.halfView}><Text>2{this.props.msg}</Text></View>
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
        backgroundColor: 'skyblue',
        color:'#fff',
        alignItems: 'center'
    },
});
