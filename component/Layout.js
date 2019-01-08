import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';


import LineText from "../LineText";

const {width} = Dimensions.get('window');


const imgUrls = [{
   url:{
       uri: 'https://yaimg.yanolja.com/joy/sunny/static/images/promotion/bnr-leisure-open-op.png'
   },
    id:1,
    uuid:'test'
}, {
    url:{
        uri: 'https://yaimg.yanolja.com/joy/sunny/static/images/promotion/bnr_leisure_winter.png'
    },
    id:2,
    uuid:'test2'
}];

const hotDealImgUrls = [
    {
        url: {
            uri: 'https://static.leisureq.io/origin/production-gajago-deal-images/a7153b97-4f81-4ce0-9998-e8b965c946dd.jpg'
        },
        title: '[경기 용인] 에버랜드 종일/오후권★핫딜',
        subTitle: '초특가 : 40% 할인',
        originPrice: '44,000',
        realPrice: '13,000',
        salePercent: '43%'
    },
    {
        url: {
            uri: 'https://yaimg.yanolja.com/joy/sunny/static/images/promotion/bnr-leisure-open-op.png'
        },
        title: '[충남 예산] 리솜스파캐슬 천천향 이용권',
        subTitle: '초특가 : 12% 할인',
        originPrice: '34,000',
        realPrice: '12,000',
        salePercent: '14%'
    },
    {
        url: {
            uri: 'https://yaimg.yanolja.com/joy/sunny/static/images/promotion/bnr-leisure-open-op.png'
        },
        title: '[충남 예산] 리솜스파캐슬 천천향 이용권',
        subTitle: '초특가 : 12% 할인',
        originPrice: '34,000',
        realPrice: '12,000',
        salePercent: '14%'
    }];


const regions = ['서울', '경기', '충북', '충남', '경북', '경남', '인천', '강원도', '부산', '강원', '속초', '경주', '부산', '일산', '파주'];

export default class Layout extends Component {

    render() {
        let indexCount=0;

        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.TitleArea}>
                    <Text style={styles.Title}>레저 / 티켓</Text>
                </View>
                <View style={styles.Image}>
                    <FlatList
                        data={imgUrls}
                        keyExtractor={(item) => (item.id+indexCount++).toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={(image) => {
                            return (
                                <Image source={image.item.url} style={styles.ImageArea}/>
                            );
                        }}
                    />
                </View>

                <View style={styles.RegionArea}>
                    <View style={styles.RegionTitleArea}>
                        <Text style={styles.RegionTitle}>인기 지역</Text>
                        <Text style={styles.RegionSubTitle}>전체 지역 ></Text>
                    </View>
                    <FlatList
                        style={styles.RegionListArea}
                        data={regions}
                        keyExtractor={(item) => (item+indexCount++).toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={(region) => {
                            return (
                                <Text style={styles.RegionItem} >{region.item}</Text>
                            );
                        }}
                    />
                </View>
                <View style={styles.HotDealArea}>
                    <View style={styles.HotDealTitleArea}>
                        <Text style={styles.HotDealTitle}>핫딜 - 야놀자 ONLY!</Text>
                    </View>

                    <FlatList
                        style={styles.HotDealList}
                        data={hotDealImgUrls}
                        keyExtractor={(item) => (item.url+indexCount++).toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={(image) => {
                            return (
                                <View  style={styles.HotDealView}>
                                    <Image source={image.item.url} style={styles.HotDealImage}/>
                                    <View style={styles.HotDealSubArea}>
                                        <Text style={styles.HotDealViewTitle}
                                              numberOfLines = { 1 }
                                        >{image.item.title}
                                        </Text>
                                        <Text style={styles.HotDealViewSubTitle}>{image.item.subTitle}</Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
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
    HotDealView: {
        width: width * 0.4,
        marginRight: 15,
    },
    HotDealViewTitle: {
        width: width * 0.4,
        color: '#333',
        fontWeight: '700',
        marginTop: 7,
        marginBottom: 7
    },
    HotDealViewSubTitle:{
        color:'#009BD5',
        fontSize:12,
        fontWeight: '500'
    },
    HotDealSubArea:{
        marginLeft:5
    },
    HotDealImage: {
        borderRadius: 8,
        height: 180,
        width: width * 0.4,
    },
    HotDealTitleArea: {
        paddingTop: 26,
        marginBottom: 10
    },
    HotDealTitle: {
        fontSize: 18,
        fontWeight: '800'
    },
    HotDealList: {
    },
    HotDealArea: {
        width: width - 40,
        height: 320,
        paddingBottom: 26,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
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
    Image: {
        width: width - 30,
        height: 200,
        alignItems: 'center'
    },
    ImageArea: {
        width: width - 40,
        alignItems: 'center',
        height: 200,
        marginRight: 15,
        borderRadius: 8
    },
    keywordArea: {},
    IconArea: {},
    RegionArea: {
        width: width - 40,
        marginTop: 26,
        paddingBottom: 26,
        paddingTop: 26,
        borderTopColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 140
    },
    RegionTitleArea: {
        flex: 1,
        flexDirection: 'row'
    },
    RegionListArea: {
        flex: 9,
        flexDirection: 'row',
    },
    RegionItem: {
        color: '#333',
        borderWidth: 1,
        width: 65,
        height: 38,
        marginRight: 10,
        borderColor: '#999',
        borderRadius: 18,
        textAlign: 'center',
        lineHeight: 38
    },
    RegionTitle: {
        alignItems: 'flex-start',
        width: width * 0.7,
        fontSize: 18,
        fontWeight: '800'
    },
    RegionSubTitle: {
        alignItems: 'flex-end',
        fontSize: 16,
        color: '#247B9F',
        fontWeight: '700'
    },

});
