import * as React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/component/Login';
import Main from './src/component/Main';
import SignUp from './src/component/SignUp';


const loginStackNav = createStackNavigator({
    Login: {screen: Login},
    SignUp: {screen: SignUp, navigationOptions: { headerShown: false }},
}, {
    initialRouteName: 'Login'
});

const homeStackNav = createStackNavigator({
    Main: {screen: Main, navigationOptions: { headerShown: false }}
}, {
    initialRouteName: 'Main'
});

const Root = createSwitchNavigator(
    {loginStackNav, homeStackNav}
);

const Stack = createAppContainer(Root);

export default function App() {
    return (
        <Stack></Stack>
    );
};
  