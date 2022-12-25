import React, { useCallback, useReducer} from "react";
import { Feather} from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/FormActions";
import { reducer } from '../utils/reducers/FormReducers';


const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false

}


const SignInForm = props => {
   
const [formState, dispatchFormState ] = useReducer (reducer, initialState);

      // VALIDATION FUNCTION
 const inputChangedHandler = useCallback 
    ((inputId, inputValue) =>  {
    const result = validateInput (inputId, inputValue);
     
    dispatchFormState ({ inputIdvalidationResult: result, inputValue })
    
    },[dispatchFormState]);
        
    

    return (
        // REACT EMPTY FRAGMENT <>
    <>
       <Input 
        id = "email"
        label = "Email"
        icon="mail"  
        iconPack={Feather} 
        keyboardType= "email-address"
        autoCapitalize = "none"
        onInputChanged={inputChangedHandler} 
        errorText = {formState.inputValidities["email"]}/>

       <Input 
        id = "password"
        label = "Password " 
        icon="lock" 
        iconPack={Feather}  
        autoCapitalize= "none"
        secureTextEntry 
        onInputChanged={inputChangedHandler} 
        errorText = {formState.inputValidities["password"]}/>
        
        <SubmitButton
         title="Sign In"
         onPress={()=> console.log("Button Pressed")}
         style={{ marginTop: 20}}
         disabled = {!formState.formIsValid}/>
    </>
    
    )

};

export default SignInForm;