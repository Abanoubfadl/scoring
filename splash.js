import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class splash extends React.Component {

componentWillMount(){
    setTimeout(()=> this.props.navigation.navigate('login')  ,1000)
}

    render(){
        return(
            <View>
            <Text>'Scoring System'</Text>
            </View>
        );
    }
}