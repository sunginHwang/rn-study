import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({

    RegionArea: {
        width: width - 40,
        marginTop: 26,
        paddingBottom: 16,
        paddingTop: 26,
        borderTopColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 120
    },
    RegionTitleArea: {
        flex: 1,
        flexDirection: 'row'
    },
    RegionListArea: {
        flex: 9,
        flexDirection: 'row',
    },
    RegionItem: {
        color: '#333',
        borderWidth: 1,
        width: 55,
        height: 30,
        marginRight: 10,
        borderColor: '#999',
        borderRadius: 13,
        textAlign: 'center',
        lineHeight: 30
    },
    RegionTitle: {
        alignItems: 'flex-start',
        width: width * 0.7,
        fontSize: 18,
        fontWeight: '800'
    },
    RegionSubTitle: {
        alignItems: 'flex-end',
        fontSize: 16,
        color: '#247B9F',
        fontWeight: '700'
    },

});
