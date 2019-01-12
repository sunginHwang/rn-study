import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {LEISURE_CLOSURE_LEISURE_INFO_LIST} from '../../../../core/constants';

import {styles} from "./styles";

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

export default ClosureRegion;

