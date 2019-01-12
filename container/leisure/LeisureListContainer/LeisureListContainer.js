import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import LeisureTitle from "../../../component/leasure/main/LeisureTitle";
import PopularRegions from "../../../component/leasure/main/PopularRegions";
import LeisureHotDealArea from "../../../component/leasure/main/LeisureHotDealArea";
import ClosureRegion from "../../../component/leasure/main/ClosureRegion";

const {width} = Dimensions.get('window');

export default class LeisureListContainer extends Component {

    render() {
        return (
            <SafeAreaView
                style={styles.Container}>
                <View style={styles.TitleArea}>
                    <Text style={styles.Title}>레저 / 티켓</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ScrollContainer}
                >
                    <LeisureTitle/>
                    <PopularRegions/>
                    <LeisureHotDealArea/>
                   <ClosureRegion/>
                </ScrollView>
            </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    ScrollContainer:{
        alignItems: 'center'
    },
    TitleArea: {
        width: width,
        height: 30,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontSize: 18,
        fontWeight: '500'
    },
    keywordArea: {},
    IconArea: {},
});
