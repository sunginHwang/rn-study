import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    closureRegion:{
        marginTop:30,
        width:width-40
    },
    closureRegionTitleArea:{
        flex:1,
        flexDirection: 'row',
    },
    closureRegionTitle:{
        fontSize: 18,
        width: width * 0.5,
        fontWeight: '800',
        alignItems: 'flex-start'
    },
    closureRegionAddress:{
        color:'#666',
        fontWeight: '500',
        alignItems: 'flex-end'
    },
});
