import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
//    Login()
//   {
//       debugger
//       var params = {
//          "callback": this.onLogin,
//          "provider": "facebook",
//      context:'testLogin'
//       };   
//       gigya.socialize.login(params);
//   };

//   //declare the callback function in your code
//    onLogin(response)
//   {
//       if (response.errorCode == 0) {

//           // this will inject the user name and nickname
//           document.getElementById('divUserName').innerHTML = response.user.nickname;

//           ///set the photo to image src attribute.
//           // document.getElementById('imgUserPhoto').src = response.user.photoURL;
//       }
//       else {

//           //handle errors
//           alert("An error has occured!" + '\n' +
//               "Error details: " + response.errorMessage + '\n' +
//               "In method: " + response.operation);
//       }
//   };
  constructor() { }

  ngOnInit(): void {
  }

}
