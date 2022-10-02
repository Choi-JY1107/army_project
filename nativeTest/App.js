import * as React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/component/Login';
import Main from './src/component/Main';


const loginStackNav = createStackNavigator({
    Login: {screen: Login}}, {
    initialRouteName: 'Login'
});

const homeStackNav = createStackNavigator({
    Main: {screen: Main}}, {
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
  