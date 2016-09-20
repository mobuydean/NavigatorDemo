/**
 * Created by jianghao on 16/9/18.
 */

import React, { Component } from 'react';
import {
    View,Text
} from 'react-native';


export default class ListScreen extends Component {
    render(){
        return (
            <View style={{
                backgroundColor:'#ffffcc',
                justifyContent: 'center',
                flex: 1,
            }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    marginLeft:10,
                }}>test jianghao hhhhhhhhh </Text>
            </View>
        );
    }
}