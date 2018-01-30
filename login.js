import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button  } from 'react-native';
var email,password
export default class login extends React.Component {
   
   
    async loginFunction(){
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
    
            console.log("Logged In!");
    
        } catch (error) {
            console.log(error.toString())
        }
    }


    render(){
        return(
            <View >
                <TextInput style={item1.container} 
                 placeholder="Enter your Email"
                 onChangeText={(text) => email=text}
                />
                <TextInput
                placeholder="Enter password"
                onChangeText={(text) => password=text}

                />
                <Button
                title="login"
                onPress={this.Login}
                />
            </View>
        );
    }
}
const item1 = StyleSheet.create({
    container: {
      padding:80,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  