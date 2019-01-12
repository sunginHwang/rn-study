import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Dimensions} from 'react-native';
import {LEISURE_CATEGORIES} from '../../../../core/constants';

const {width} = Dimensions.get('window');

class LeisureCategory extends Component {

    render() {
        let indexCount = 0;
        return (
            <View style={styles.CategoryWrapper}>
                <View style={styles.CategoryArea}>
                    <FlatList
                        data={LEISURE_CATEGORIES}
                        keyExtractor={(item) => (item.url + indexCount++).toString()}
                        renderItem={(info) => {
                            return (
                                <View style={styles.CategoryArea}>
                                    {/* <View>
                                    <Image source={info.item.url} style={styles.CategoryImage}/>
                                    <Text style={styles.LeisureInfoArea}>
                                        {info.item.name}
                                    </Text>
                                </View>*/}
                                    <View style={styles.CategoryImage}>
                                        <Text >{info.item.name}</Text>
                                    </View>
                                    <View style={styles.CategoryName}>
                                        <Text >{info.item.name}</Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>

            </View>

        )
    }
}

export default LeisureCategory;

export const styles = StyleSheet.create({
    CategoryWrapper:{
        height:100,
        paddingTop: 20,
        width:width-30,
        paddingBottom: 20,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
    },
    CategoryImage:{
      flex:5,
        backgroundColor:'red',
    },
    CategoryName:{
        flex:5,
        backgroundColor:'blue',
    },
    CategoryArea: {
        flexDirection: 'row',
        flex:2.5
    },

});


