import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    CategoryWrapper: {
        height: 160,
        paddingTop: 20,
        width: width - 30,
        paddingBottom: 20,
    },
    Categories: {
        flexDirection: 'row',
        marginBottom: 26,
    },
    CategoryImage: {
        height: 35,
        width: 35,
    },
    CategoryName: {
        marginTop: 5,
        color: '#666',
        fontWeight: '500'
    },
    CategoryArea: {
        flex: 2.5,
        alignItems: 'center',
    },

});
