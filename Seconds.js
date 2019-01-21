import React, {Component} from 'react';
import { StyleSheet, Button} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import LineText from "./LineText";
import ClosureRegion from "./component/leasure/main/ClosureRegion/ClosureRegion";


export default class Seconds extends Component {


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <ClosureRegion navigation={this.props.navigation}/>
                <Button
                    onPress={()=>this.props.navigation.goBack()}
                    title='뒤로가기'/>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center'
    },
});
