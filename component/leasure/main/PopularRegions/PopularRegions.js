import React, {Component} from 'react';
import { View, Text, FlatList} from 'react-native';
import {LEISURE_POPULAR_REGIONS} from '../../../../core/constants';

import {styles} from "./styles";

class PopularRegions extends Component {

    render() {
        let indexCount=0;

        return (
            <View style={styles.RegionArea}>
                <View style={styles.RegionTitleArea}>
                    <Text style={styles.RegionTitle}>인기 지역</Text>
                    <Text style={styles.RegionSubTitle}>전체 지역 ></Text>
                </View>
                <FlatList
                    style={styles.RegionListArea}
                    data={LEISURE_POPULAR_REGIONS}
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
        )
    }
}

export default PopularRegions;
