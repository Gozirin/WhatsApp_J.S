import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


import PageContainer from "../components/PageContainer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import colors from "../constants/colors";
import logo from '../assets/images/logo.png';



const AuthScreen = props => {

 const [isSignUp, setIsSignUp] = useState (false);

    // KEYBOARD-BEHAVIOUR TO SUITE AOS & IOS DEVICE
    return <SafeAreaView style={{ flex: 1}}>
        <PageContainer>
          <ScrollView>
            <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === "ios"? "height" : undefined}
            keyboardVerticalOffset={100}>
                
       <View style={styles.imageContainer}>
            <Image style={styles.image}
             source= {logo}
             //resizeMode = 'center'
             />
        </View>
        
        {
          isSignUp ?
         <SignUpForm/> :
         <SignInForm/>
        }

        <TouchableOpacity
     onPress={() => setIsSignUp
     (prevState => !prevState)}
     style={styles.linkContainer}>
    <Text style={styles.link}>
    {'{SignUp-SignIn}'} </Text>
        </TouchableOpacity>
        
        </KeyboardAvoidingView>
        </ScrollView>
       </PageContainer>
    </SafeAreaView>

};
const styles = StyleSheet.create ({
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'contain',
        marginVertical: 15,
    },
    link: {
        color: colors.blue,
        fontFamily: 'black',
        letterSpacing: 0.3,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%',
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default AuthScreen;