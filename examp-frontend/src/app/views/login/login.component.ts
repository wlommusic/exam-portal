import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginData = {
    "userName":"",
    "password":""
  }
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){};

  formSubmit(){
    console.log("login")
    if(this.loginData.userName.trim()=="" || this.loginData.userName==null){
      this.snack.open("username not valid","😔",{
        duration:3000
      });
      return;
    }
    if(this.loginData.password.trim()=="" || this.loginData.password==null){
      this.snack.open("password not valid","😔",{
        duration:3000
      });
      return;
    }
    //
    this.login.generateToken(this.loginData).subscribe(
      
      (data:any)=>{
        // after login
        this.login.setToken(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            // console.log(user);

            if(this.login.getUserRole()==="ADMIN"){
              // admin dashboard
              this.router.navigate(["admin"])
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=="NORMAL")
            {//user dashboard
              this.router.navigate(["user-dashboard/0"])
              this.login.loginStatusSubject.next(true);
            }
            else{
              this.login.logout();
            }
          }
        )
      },
      (err)=>{
        console.log(err);
        this.snack.open("invalid details","😔",{
          duration:3000
        });
      }
    )

  }

}
