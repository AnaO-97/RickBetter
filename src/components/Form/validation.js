export default function validation (objValidar){
    const {email, password} = objValidar;

    const errors = {};

    const regEx = {
        email:     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,35}$/i,
        password : /^(?=.*\d).{6,10}$/i
    }
    
    if(email.length === 0 || email.length > 35)
        errors.email = "The email entered is not valid";
    else if (!regEx.email.test(email))
        errors.email = "The email entered is not valid";

    if (!regEx.password.test(password)) 
        errors.password = "The password entered is not valid"
    
    return errors;
}