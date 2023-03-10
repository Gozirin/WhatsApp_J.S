import { validate } from "validate.js";

//return validationResult && validationResult[id];

export const validateString = (id, value) =>{
    const constraints = { 
        presence: { allowEmpty: false},
        
    };

    if (value !== "") {
      constraints.format = {
        pattern: "[a-z]+",
        flags: "1",
        meessage: "value can only contain letters"
      }
    }


    const validationResult = validate ({ [id]: value}, {[id]: constraints });
    
    return validationResult && validationResult[id];

}


export const validateEmail = (id, value) =>{
    const constraints = { 
        presence: { allowEmpty: false},
        
    };

    if (value !== "") {
       constraints.email = true
    }


    const validationResult = validate ({ [id]: value}, {[id]: constraints });
    
    return validationResult && validationResult[id];

}

export const validatePassword = (id, value) =>{
    const constraints = { 
        presence: { allowEmpty: false},
        
    };

    if (value !== "") {
       constraints.length = {
        minimum: 6,
        meessage: "must be at least 6 characters"
       }
    }


    const validationResult = validate ({ [id]: value}, {[id]: constraints });
    
    return validationResult && validationResult[id];

}