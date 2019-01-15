import React, {Component} from 'react';
import {Dimensions, View, Button} from 'react-native';
import ClientNetworkHandle from "./ClientNetworkHandle";
import InputHandle from "./InputHandle";
import AnimationComponent from "./AnimationComponent";
import HalfView from "./HalfView";
const {width} = Dimensions.get('window');


export default class Third extends Component {


    render() {
        return (
            <View><ClientNetworkHandle/>
                <InputHandle/>
                <AnimationComponent style={{width:width , height:3}}>
                    <HalfView msg='FadeInHalfViewTest'/>
                    <Button
                        onPress={()=>this.props.navigation.navigate('첫번째')}
                        title='뒤로가기'/>

                </AnimationComponent></View>        )
    }
}
