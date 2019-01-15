import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LeisureListContainer from './container/leisure/LeisureListContainer';
import Seconds from './Seconds';
import Third from './Third';

const StackNavigator = createStackNavigator({
    Seconds: {
        screen: Seconds,
        navigationOptions:({navigation}) => ({
          header: null
        })
    }
});

const TabNavigator = createBottomTabNavigator({
    첫번째: { screen: LeisureListContainer },
    두번째: { screen: Seconds },
    세번째: { screen: Third },
});

export default createAppContainer(createSwitchNavigator({
    TabNavigator,
    StackNavigator
}));