import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    Image: {
        width: width - 30,
        height: 200,
        alignItems: 'center'
    },
    ImageArea: {
        width: width - 40,
        alignItems: 'center',
        height: 200,
        marginRight: 15,
        borderRadius: 8
    },
});
