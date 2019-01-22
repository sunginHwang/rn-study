import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Button, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {LEISURE_DETAIL_MAIN_IMG_LIST, LEISURE_DETAIL_INFO} from "../../../core/constants";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import InstructionList from "../../../component/common/InstructionList/InstructionList";

const {width} = Dimensions.get('window');

export default class LeisureDetailInfoContainer extends Component {

    render() {
        let indexCount = 0;

        return (
            <View
                style={styles.Container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ScrollContainer}
                >
                    <View style={styles.mainTitleArea}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Text style={styles.BackBtn}>←</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.mainImgArea}>
                        <FlatList
                            data={LEISURE_DETAIL_MAIN_IMG_LIST}
                            keyExtractor={(item) => (item+indexCount++).toString()}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={(mainImg) => {
                                return (
                                    <Image source={mainImg.item} style={styles.mainImg}/>
                                );
                            }}
                        />
                    </View>
                    <View style={styles.leisureInfoArea}>
                        <Text style={styles.leisureTitle}>{LEISURE_DETAIL_INFO.title}</Text>
                        <Text style={styles.leisureDescription}>{LEISURE_DETAIL_INFO.description}</Text>
                        {
                            LEISURE_DETAIL_INFO.isPopularPlace &&
                                <View style={styles.popularPlaceArea}>
                                    <Text style={styles.popularPlaceTitle}>
                                        지금인기 - {LEISURE_DETAIL_INFO.popularPlace.title}
                                        </Text>
                                    <Text style={styles.popularPlaceDescription}>
                                        {LEISURE_DETAIL_INFO.popularPlace.description}
                                    </Text>
                                </View>
                        }
                        {
                            LEISURE_DETAIL_INFO.point !== 0 &&
                            <Text style={styles.savePointDescription}>
                                레저/티켓 구매시 {LEISURE_DETAIL_INFO.point}% 포인트 적립
                            </Text>
                        }

                    </View>

                <View style={styles.useInfoArea}>
                   <InstructionList
                        title='상품기본정보'
                        lists={LEISURE_DETAIL_INFO.productUseInstructions}
                   />
                    <InstructionList
                        title='유의사항안내'
                        lists={LEISURE_DETAIL_INFO.notices}
                    />
                </View>
               {/* <View>
                   <View>
                       <Text>유효기간</Text>
                       <Text>{LEISURE_DETAIL_INFO.introduction.periodStartDate} ~ {LEISURE_DETAIL_INFO.introduction.periodEndDate}</Text>
                   </View>
                    <View>
                        <Text>{LEISURE_DETAIL_INFO.introduction.availDate}부터</Text>
                        <Text>이용가능</Text>
                    </View>
                    <View>
                        <Text>문의번호</Text>
                        <Text>{LEISURE_DETAIL_INFO.introduction.phoneNumber}</Text>
                    </View>
                    <View>
                        <Text>유효기간내</Text>
                        <Text>{LEISURE_DETAIL_INFO.introduction.remainType}</Text>
                    </View>
                </View>*/}
                </ScrollView>
                <View style={styles.purchaseArea}>
                    <View style={styles.purchaseButton}>
                        <Text style={styles.purchaseButtonPrice}>상품을 선택해주세요</Text>
                        {
                            LEISURE_DETAIL_INFO.point !== 0 &&
                            <Text style={styles.purchaseButtonPoint}>
                                레저/티켓 구매시 {LEISURE_DETAIL_INFO.point}% 포인트 적립
                            </Text>
                        }
                    </View>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    ScrollContainer:{
     alignItems:'center'
    },
    useInfoArea:{
        width: width-30,
    },
    purchaseButtonPrice:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold'
    },
    purchaseButtonPoint:{
        fontSize:12.5,
        color:'#fff',
        fontWeight:'400',
    },
    purchaseButton:{
      backgroundColor:'#FF3478',
        color:'#fff',
        width:width-20,
        alignItems:'center',
        lineHeight:60,
        justifyContent:'center',
        marginTop:5,
        height:60,
        borderRadius:8,
    },
    purchaseArea:{
        position: 'absolute',
        width:width,
        bottom:0,
        borderTopColor:'#ddd',
        borderTopWidth:1,
        alignItems:'center',
        height:getStatusBarHeight() === 0 ? 80 : 110,
        marginTop:10,
        backgroundColor:'#fff'
    },
    savePointDescription:{
        marginTop:20,
        color: '#FF3478',
        fontWeight:'500',
        fontSize:13,
        marginLeft:4,
    },
    popularPlaceTitle:{
        fontWeight:'bold',
        color:'#009bd5',
        fontSize:17,
    },
    popularPlaceDescription:{
        color:'#666',
        marginTop:12,
        fontSize:13
    },
    popularPlaceArea:{
        marginTop:10,
        backgroundColor:'#f5f5f5',
        borderRadius:8,
        padding: 16
    },
    leisureTitle:{
       color:'#333',
       fontWeight:'700',
       fontSize:28,
        marginBottom:10,
    },
    leisureDescription:{
      color:'#666',
      fontWeight:'500',
      fontSize:16,
      marginBottom:10,
    },
    BackBtn:{
      color: '#fff',
      fontSize:25,
      fontWeight:'bold'
    },
    leisureInfoArea:{
        borderBottomColor:'#f2f2f2',
        borderBottomWidth:1,
      width: width-30,
      marginTop:20,
      paddingBottom:20,
      marginBottom:20,
    },
    mainTitleArea:{
        position: 'absolute',
        left:20,
        top:getStatusBarHeight() === 0 ? 10 : getStatusBarHeight(),
        zIndex:10,
    },
    mainImgArea:{
      width: width,
      height: 300
    },
    mainImg:{
        width: width,
        height: 300
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
