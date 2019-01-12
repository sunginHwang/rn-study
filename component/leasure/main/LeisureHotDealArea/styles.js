import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    }
});
