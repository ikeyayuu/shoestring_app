import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Login (props) 
{
    const navigation = useNavigation()

    // Initialize the states
    const [userEmail,setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    useEffect( () => {
        if( props.auth === true ) {
        //   navigation.reset({ index: 0, routes: [ {name: 'LandingPage'} ] })
            navigation.navigate('LandingPage')
        }
      }, [props.auth] )

    return(

        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.inputView}>
                    <Text style={styles.welcomeTitle}>WELCOME TO SHOESTRING</Text>
                    <Text style={styles.title}>Email Address</Text>
                    <TextInput style={styles.textInput} onChangeText={ (val) => setUserEmail(val) }/>
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.textInput} 
                        onChangeText={ (val) => setUserPassword(val) } 
                        secureTextEntry={true}
                    />
                        <View style={styles.innerButtonView}>
                            <TouchableOpacity style={styles.button} onPress={ () => { props.handler(userEmail,userPassword) }}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                <Text style={styles.metaText}>Don't have an account? Register here</Text>
                            </TouchableOpacity>
                            <Text>OR</Text>
                            <TouchableOpacity style={styles.googleButton} >
                                <Text style={styles.googleButtonText}>Log In With Google</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

// Style of Log in

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center"
    
    },
    backgroundImage: {
        maxWidth: 400,
        maxHeight: 300,
        margin: 50
    },
    welcomeTitle: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        textAlign: "center",
        marginBottom: 30,
        margin: 70,

    },
    inputView: {
        maxWidth: 400,
        
    },
    innerButtonView: {
        alignItems: "center"
    },
    button: {
        marginVertical: 10,
        backgroundColor: "#f08f11",
        padding: 10,
        borderRadius: 10,
        width: 200
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    googleButton: {
        marginVertical: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        width: 150,
        
    },
    googleButtonText: {
        color: 'black',
        textAlign: "center"
    },
    disableButton: {
        marginVertical: 20,
        backgroundColor: "#b2b2b2",
        padding: 10,
        borderRadius: 10,
        width: 150
    },
    textInput: {
        backgroundColor: '#f1f1f1',
        fontSize: 12,
        padding: 10,
        borderRadius: 4,
        marginVertical: 15,
        width: 300
    },
    title: {
        fontSize: 15,
        color:'black',
        //fontWeight:"bold",
    },
    metaText: {
        textAlign:"center",
        margin: 20
    }
})