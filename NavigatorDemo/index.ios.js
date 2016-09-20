/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Home from './Home';
import ListViewDemo from './ListViewDemo';
import ListScreen from './ListScreen';

class NavigatorDemo extends Component {
  render() {
    return (
        //iOS导航栏必须要设置style 下面的文字才可以显示
        <NavigatorIOS
            style={{
                backgroundColor:'#ffffff',
                justifyContent: 'center',
                flex: 1,
            }}
            initialRoute={{
                title:'主页',
                component:ListViewDemo,
                titleTextColor:'#333333',
                barTintColor:'#332233',
                backButtonTitle:'返回',
            }}
        />

    );
  }
}

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
