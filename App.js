import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import First from './First';
import Seconds from './Seconds';
import Third from './Third';
import Layout from './component/Layout';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    첫번째: { screen: Layout },
    두번째: { screen: Seconds },
    세번째: { screen: Third },
});

export default createAppContainer(TabNavigator);