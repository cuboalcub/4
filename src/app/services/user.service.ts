import { Injectable } from '@angular/core';
import { Credential } from '../models/user/Credential';
import { User } from '../models/user/User';
import { Token } from '../models/user/Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postLogin(myCredential : Credential): Token {

    console.log("email... " + myCredential.email);
    console.log("password..."+ myCredential.password);

    var myToken = new Token();
    //call fake api
    if(myCredential.email == "dani@gmail.com" && myCredential.password == "safcli")
      {
        myToken.id="200"
        myToken.user = "dani"
        myToken.token = "123456"
      }
      else{
        myToken.id="0001"
        myToken.user = "bad credencial"
        myToken.token = ""
      }
    return myToken;
  } 

  postUser(myUser : User): User {

    console.log("email... " + myUser.email);
    console.log("password..."+ myUser.password);

    var myNewUser = new User();
    //call fake api
    //Success
    myNewUser.id = 0;
    if(myNewUser.id != 0)
      {
        console.log("Success"+myNewUser.id);
        myNewUser.id=1;//Success
        myNewUser.email = myUser.email;
        myNewUser.password = myUser.password;
        myNewUser.name = myUser.name;
        myNewUser.last_name = myUser.last_name;
      }
      else{

        myNewUser.id=0
        console.log("Error"+myNewUser.id);
      }
    return myNewUser;
  } 

  resetPassword(email : String): User {
    var myUser = this.validateUser(email);
    console.log("email... " + email);
    if (myUser.id != 0){
      var myURLReset = this.createURLReset(myUser.email);
      console.log(myURLReset);
      var sendEmail = this.sendEmail(myUser.email, myURLReset);
      console.log(sendEmail);
    }
    return myUser;
  }

  sendEmail(email : String, urlRset: String): String {
    var emailSuccess = 0;
    //send email using SMTP (gmail, outlook, etc)
    //email sent
    emailSuccess = 1;
    console.log('sent to :' + email);
    console.log('url reset :' + urlRset);
    return ""+emailSuccess;
  }
  createURLReset(email : String): String{
    var myURLReset = this.createBaseURL()+"/"+email+"/"+this.createTokenReset(email);
    return myURLReset;
  }

  createBaseURL():String{
    //call process to create base url
    var baseURL="http://localhost:4200/reset-password";
    return baseURL;
  }

  createTokenReset(email : String):String{
    //JWT create a token to encrypt the email
    var SECRET_KEY = "safcli";
    var myToken = "jksandjiu389eu3i2uhd8n4r";
    return myToken;
  }
  
  validateUser(email : String): User {
    //call fake query api by email
    var myUser = new User();
    //Success, email valid
    myUser.id = 0;
    if(email == "dani@gmail.com")
      {
        console.log("Success"+myUser.id);
        myUser.id=1;//Success
        myUser.email = email;
        myUser.password = "";
        myUser.name = "Dani";
        myUser.last_name = "Cano";
      }
      else{

        myUser.id=0
        console.log("Error"+myUser.id);
      }
    return myUser;
  } 
validateToken(token : String, email : String ): String {
  //call fake query api by email
  var validToken = "1";
  return ""+validToken;
  
}
destroyToken(token : String): String {
  //call fake query api by email
  var validToken = "1";
  return ""+validToken;
}

resetrealPassword(email : String, password : String, token : String): String {
  var isSuccess = 0;
  //call fake query api by email
    if(email == "dani@gmail.com")
      {
        console.log("Success"+isSuccess);
        isSuccess=1;//Success
        this.destroyToken(token);
        console.log("destroyed"+token);
      }
      else{ 

        isSuccess=0
        console.log("Error"+isSuccess);
}
return ""+isSuccess;
}
}