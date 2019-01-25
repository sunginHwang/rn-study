import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({

    useInfoTitle:{
        fontSize:17,
        color:'#333',
        fontWeight:'bold',
        marginBottom:15
    },
    useInfoArea:{
        borderBottomColor:'#f2f2f2',
        borderBottomWidth:1,
        paddingBottom:20,
        marginBottom:20,
        width: width-30,
    }
});
