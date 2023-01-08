import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/FormActions";
import { reducer } from "../utils/reducers/FormReducers";
import { SignUp } from "../utils/actions/authActions";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { async } from "validate.js";
import { ActivityIndicator, Alert } from "react-native";
import colors from "../constants/colors";

// ERASE LATER//
console.log(getFirebaseApp());

const initialState = {}

const SignUpForm = props => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState ] = useReducer (reducer, initialState);

    // VALIDATION FUNCTION
 const inputChangedHandler = useCallback 
        ((inputId, inputValue) =>  {
const result = validateInput (inputId, inputValue);
        dispatchFormState ({ inputId,validationResult: result,inputValue })

        },[dispatchFormState]);

        useEffect(()=> {
            if (error) {
                Alert.alert("An error occured", error, [{text: "Okay"}]);
            }
            
        }, [error])

        // AUTHENTICATION HANDLER
        const authHandler = async() => {
            try {
                setIsLoading(true);
                await SignUp (
                formState.inputValues.firstName,
                formState.inputValues.lastName,
                formState.inputValues.email,
                formState.inputValues.password,
                );
                setError(null);

            } catch (error) {
                setError(error.message);
                setIsLoading(false);

            }
          
        }
    

    return  (
        // REACT EMPTY FRAGMENT <> //
    <>
        <Input 
        firstName = "true"
        id = "firstName"
        label = "First name" 
        icon="user-o" 
        iconPack={FontAwesome} 
        onInputChanged={inputChangedHandler} autoCapitalize = "none"
        // errorText = {formState.inputValidities["firstName"]}
        />

       <Input 
        id = "lastName"
        label = "Last name" 
        icon="user-o" 
        iconPack={FontAwesome} 
        onInputChanged={inputChangedHandler} autoCapitalize = "none"
        // errorText = {formState.inputValidities["lastName"]}
        />


       <Input 
        id = "email"
        label = "Email"
        icon="mail"  
        iconPack={Feather} 
        onInputChanged={inputChangedHandler}
        keyboardType = "email-address"
        autoCapitalize = "none"
        // errorText = {formState.inputValidities["email"]}
        />

       <Input 
        id = "password"
        label = "Password" 
        icon="lock" 
        autoCapitalize= "none"
        secureTextEntry
        iconPack={Feather} 
        onInputChanged={inputChangedHandler}
        // errorText = {formState.inputValidities["password"]}
        />
        
    {
        isLoading ?
        <ActivityIndicator size={'small'} 
        color={colors.primary}
         style={{ marginTop: 10 }} /> :
        
        <SubmitButton
         title="Sign Up"
         onPress={authHandler}
         style={{ marginTop: 20}}
         disabled = {!formState.formIsValid}/>
        
        }
    </>

    );
}




export default SignUpForm;