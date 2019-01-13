import React, {Component} from 'react';
import {View, Text, Image } from 'react-native';
import {LEISURE_CATEGORIES} from '../../../../core/constants';

import {styles} from "./style";

class LeisureCategory extends Component {

    render() {
        return (
            <View style={styles.CategoryWrapper}>
                <View style={styles.Categories}>

                    {
                        LEISURE_CATEGORIES.map((category, index) => {
                            return (index > 3 &&
                                <View key={index} style={styles.CategoryArea}>
                                    <Image source={category.url} style={styles.CategoryImage}/>
                                    <Text style={styles.CategoryName}>{category.name}</Text>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={styles.Categories}>

                    {
                        LEISURE_CATEGORIES.map((category, index) => {
                            return (index <= 3 &&
                                <View key={index} style={styles.CategoryArea}>
                                    <Image source={category.url} style={styles.CategoryImage}/>
                                    <Text style={styles.CategoryName}>{category.name}</Text>
                                </View>
                            )
                        })
                    }

                </View>
            </View>

        )
    }
}

export default LeisureCategory;



