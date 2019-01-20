import React from 'react';
import { createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
    StackViewTransitionConfigs
} from 'react-navigation';
import LeisureListContainer from './container/leisure/LeisureListContainer';
import Seconds from './Seconds';
import Third from './Third';
import LeisureDetailInfoContainer from './container/leisure/LeisureDetailInfoContainer';

const IOS_MODAL_ROUTES = ['OptionsScreen'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
};

const StackNavigator = createStackNavigator({
    첫번째: { screen: LeisureListContainer,
        navigationOptions:({navigation}) => ({
            header: null
        })},
    두번째: { screen: Seconds ,
        navigationOptions:({navigation}) => ({
            header: null
        })},
    세번째: { screen: Third,
        navigationOptions:({navigation}) => ({
            header: null
        })},

    Seconds: {
        screen: Seconds,
        navigationOptions:({navigation}) => ({
          header: null
        })
    },

    LeisureDetailInfo: {
        screen: LeisureDetailInfoContainer,
        navigationOptions:({navigation}) => ({
            header: null
        })
    }
}, {
    transitionConfig: dynamicModalTransition
});

const TabNavigator = createBottomTabNavigator({
    첫번째: { screen: LeisureListContainer },
    두번째: { screen: Seconds },
    세번째: { screen: Third },
}, {
        transitionConfig: dynamicModalTransition
    });

export default createAppContainer(createSwitchNavigator({
    StackNavigator
}));