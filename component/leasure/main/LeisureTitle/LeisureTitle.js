import React, {Component} from 'react';
import { View,  Image, FlatList} from 'react-native';
import {LEISURE_TITLE_IMAGES} from '../../../../core/constants';
import {styles} from "./styles";

class LeisureTitle extends Component {

    render() {
        let indexCount=0;

        return (
            <View style={styles.Image}>
                <FlatList
                    data={LEISURE_TITLE_IMAGES}
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
        )
    }
}

export default LeisureTitle;

