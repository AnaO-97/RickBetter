import { users } from '../../data';

export function login (loginUser){
    const {email, password} = loginUser;

    for (let index = 0; index < users.length; index++) {
        if(users[index].EMAIL_bd === email){
            if(users[index].PASSWORD_bd === password){
                return true;                              
            }
        }       
    }
    console.log("llene los datos")
    return false;
}