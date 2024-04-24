import { Injectable } from '@angular/core';
import { Credential } from '../models/user/Credential';
import { Token } from '../models/user/Token';
import { User } from '../models/user/User'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postLogin(mycrecential: Credential): Token{
    console.log("email: " + mycrecential.email + " password: " + mycrecential.password);
    var myToken = new Token();
    //call fake api
    if (mycrecential.email == "admin" && mycrecential.password == "admin")
    {
    myToken.id = "1"; 
    myToken.email = "admin"; 
    myToken.token = "admin";
    }
    else{
      myToken.id = "0";
      myToken.email = "bad credentials";
      myToken.token = "";
    }
    return myToken;
  }
  
  createUser(myUser:User): User{
      console.log(myUser)
    var myNewUser = new User();
    myNewUser.id = 0
    if(myNewUser.id != 0)
      myNewUser.email = myUser.email
      myNewUser.password = myUser.password
      myNewUser.name = myUser.name
      myNewUser.id = 1;
    return myNewUser;
  }
  
  resetPassword(email: String): User{
    console.log(email)
    var myValidatedUser = this.validateUser(email);
    return myValidatedUser
  }
  
  validateUser(email: String): User{
    //call fake api
    var myUser = new User();
    myUser.id = 1;

    if(myUser.email == email)
      myUser.password = "password";
      myUser.name = "name";
      myUser.last_name = "last_name";
    return myUser
  }
}


