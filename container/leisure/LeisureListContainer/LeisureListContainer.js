import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import LeisureTitle from "../../../component/leasure/main/LeisureTitle";
import PopularRegions from "../../../component/leasure/main/PopularRegions";
import LeisureHotDealArea from "../../../component/leasure/main/LeisureHotDealArea";

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
                    <View style={styles.closureRegion}>
                        <View style={styles.closureRegionTitleArea}>
                            <Text style={styles.closureRegionTitle}>
                                내 주변 레저/티켓
                            </Text>
                            <Text style={styles.closureRegionAddress}>
                                경기도 고양시 일산동 탄중로
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
    closureRegion:{
        marginTop:30,
        width:width-40
    },
    closureRegionTitleArea:{
        flex:1,
        flexDirection: 'row',
    },
    closureRegionTitle:{
        fontSize: 18,
        width: width * 0.5,
        fontWeight: '800',
        alignItems: 'flex-start'
    },
    closureRegionAddress:{
        color:'#666',
        fontWeight: '500',
        alignItems: 'flex-end'
    },
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
