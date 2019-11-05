/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  View
} from 'react-native'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"

import HomeScreen from './pages/Home';
import PesquisaEnderecoScreen from './pages/PesquisaEndereco';

const AppNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Pesquisa: PesquisaEnderecoScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render(){
    return <AppContainer/>
  }
};