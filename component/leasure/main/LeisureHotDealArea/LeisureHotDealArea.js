import React, {Component} from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import {LEISURE_HOT_DEAL_IMAGES} from '../../../../core/constants';

import {styles} from "./styles";

class LeisureHotDealArea extends Component {

    render() {
        let indexCount=0;

        return (
            <View style={styles.HotDealArea}>
                <View style={styles.HotDealTitleArea}>
                    <Text style={styles.HotDealTitle}>핫딜 - 야놀자 ONLY!</Text>
                </View>
                <FlatList
                    style={styles.HotDealList}
                    data={LEISURE_HOT_DEAL_IMAGES}
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

        )
    }
}

export default LeisureHotDealArea;

