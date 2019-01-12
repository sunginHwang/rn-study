import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
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
