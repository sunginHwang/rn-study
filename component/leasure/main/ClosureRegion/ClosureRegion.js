import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {LEISURE_CLOSURE_LEISURE_INFO_LIST} from '../../../../core/constants';

import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');

class ClosureRegion extends Component {

    render() {
        let indexCount = 0;
        return (
            <View style={styles.closureRegion}>
                <View style={styles.closureRegionTitleArea}>
                    <Text style={styles.closureRegionTitle}>
                        내 주변 레저/티켓
                    </Text>
                    <Text style={styles.closureRegionAddress}>
                        경기도 고양시 일산동 탄중로
                    </Text>
                </View>
                <FlatList
                    data={LEISURE_CLOSURE_LEISURE_INFO_LIST}
                    keyExtractor={(item) => (item.url + indexCount++).toString()}
                    renderItem={(info) => {
                        return (
                            <View style={styles.LeisureListArea}>
                                <Image source={info.item.url} style={styles.LeisureImage}/>
                                <View style={styles.LeisureInfoArea}>
                                    <View style={styles.LeisureTextInfoArea}>
                                        <Text style={styles.LeisureInfoTitle}
                                              numberOfLines={1}
                                        >{info.item.title}
                                        </Text>
                                        <Text style={styles.LeisureInfoDescription}
                                              numberOfLines={1}>
                                            {info.item.description}
                                        </Text>
                                        <Text style={styles.LeisureInfoNavigation}
                                              numberOfLines={1}>
                                            내위치로부터 {info.item.near}km
                                        </Text>
                                    </View>
                                    <View style={styles.LeisurePriceInfoArea}>
                                        <View style={styles.OriginPriceArea}>
                                            {
                                                info.item.salePercent !== '0' &&
                                                <Text
                                                    style={styles.OriginPrice}>
                                                    {info.item.originPrice} 원
                                                </Text>
                                            }
                                        </View>
                                        <View style={styles.SalePriceArea}>
                                            {
                                                info.item.salePercent !== '0' &&
                                                <Text
                                                    style={styles.SaleInfo}
                                                    numberOfLines={1}>
                                                    {info.item.salePercent} %
                                                </Text>
                                            }
                                            <Text
                                                style={styles.SalePrice}
                                                numberOfLines={1}>
                                                {info.item.salePrice} 원
                                            </Text>
                                        </View>
                                    </View>
                                </View>


                            </View>
                        );
                    }}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    LeisureListArea: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
    LeisureImage: {
        flex: 3.6,
        width: 100,
        marginTop: 3,
        height: 130,
        borderRadius: 8,
    },
    LeisureInfoArea: {
        paddingTop: 0,
        flexDirection: 'column',
        flex: 6.4,
        marginLeft: 10,
    },
    LeisureTextInfoArea:{
        flex: 7,
        alignItems: 'flex-start',
    },
    LeisurePriceInfoArea:{
        flex: 3,
        alignItems: 'flex-end',
    },
    OriginPriceArea:{
        flex:3,
        marginLeft:10,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    SalePriceArea:{
        flex: 7,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    SalePrice:{
        color: '#333',
        fontSize: 19,
        fontWeight:'700'
    },
    OriginPrice:{
        textDecorationLine:'line-through',
        color:'#999',
        fontSize: 13,
        fontWeight:'700'
    },
    SaleInfo:{
        color:'#FF3478',
        marginRight:5,
        fontSize: 13,
        marginTop:7,
        fontWeight:'700'
    },
    LeisureInfoTitle: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
        fontWeight: '700'
    },
    LeisureInfoDescription: {
        color: '#666',
        fontSize: 13,
        marginBottom: 6,
        fontWeight: '400'
    },
    LeisureInfoNavigation:{
        color: '#666',
        fontSize: 13,
        marginBottom: 6,
        fontWeight: '500'
    },
    closureRegion: {
        marginTop: 30,
        width: width - 40
    },
    closureRegionTitleArea: {
        flex: 1,
        flexDirection: 'row',
    },
    closureRegionTitle: {
        fontSize: 18,
        width: width * 0.5,
        fontWeight: '800',
        alignItems: 'flex-start'
    },
    closureRegionAddress: {
        color: '#666',
        fontWeight: '500',
        alignItems: 'flex-end'
    },
});

export default ClosureRegion;

