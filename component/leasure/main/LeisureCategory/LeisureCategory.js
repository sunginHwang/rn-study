import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
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
                                <TouchableOpacity
                                    key={index}
                                    style={styles.CategoryTouchArea}
                                    onPress={()=>this.props.navigation.navigate({
                                        routeName:'LeisureDetailInfo',
                                        transitionStyle:'inverted'
                                    })}
                                >
                                    <View style={styles.CategoryArea} >
                                        <Image source={category.url} style={styles.CategoryImage}/>
                                        <Text style={styles.CategoryName}>{category.name}</Text>
                                    </View>
                                </TouchableOpacity>

                            )
                        })
                    }

                </View>
                <View style={styles.Categories}>

                    {
                        LEISURE_CATEGORIES.map((category, index) => {
                            return (index <= 3 &&
                                <TouchableOpacity
                                    key={index}
                                    style={styles.CategoryTouchArea}
                                    onPress={()=>this.props.navigation.navigate('두번째')}
                                >
                                    <View style={styles.CategoryArea} >
                                        <Image source={category.url} style={styles.CategoryImage}/>
                                        <Text style={styles.CategoryName}>{category.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </View>

        )
    }
}

export default LeisureCategory;



