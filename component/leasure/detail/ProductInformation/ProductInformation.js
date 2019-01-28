import React, {Component} from 'react';
import { View, Text } from 'react-native';
import InstructionList from "../../../common/InstructionList/InstructionList";

import {styles} from "./styles";


export default class ProductInformation extends Component {


    render() {
        const {basicInformation, useInformation, notices} = this.props;
        return (
            <View style={styles.useInfoArea}>
                <Text style={styles.useInfoTitle}>
                    이용 상세 정보
                </Text>
                <InstructionList
                    title='상품 기본 정보'
                    lists={basicInformation}
                />
                <InstructionList
                    title='상품 기본 정보'
                    lists={useInformation}
                />
                <InstructionList
                    title='유의 사항 안내'
                    lists={notices}
                />
            </View>

        )
    }
}

