import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private userService: UserService,private _snackBar: MatSnackBar) {}

  public user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  email = new FormControl('', [Validators.required, Validators.email]);

  formSubmit() {

    // validation 
    if(this.user.userName=="" || this.user.userName==null){
      this._snackBar.open("username is required","⚠️",{
        duration:3000
      });
      return;
    }
    if(this.user.password=="" || this.user.password==null){
      this._snackBar.open("password is required","⚠️",{
        duration:3000
      });
      return;
    }
    if(this.user.firstName=="" || this.user.firstName==null){
      this._snackBar.open("first name is required","⚠️",{
        duration:3000
      });
      return;
    }
    if(this.user.lastName=="" || this.user.lastName==null){
      this._snackBar.open("last name is required","⚠️",{
        duration:3000
      });
      return;
    }
    if(this.user.email=="" || this.user.email==null){
      this._snackBar.open("email is required","⚠️",{
        duration:3000
      });
      return;
    }
    if(this.user.phone=="" || this.user.phone==null){
      this._snackBar.open("phone number is required","⚠️",{
        duration:3000
      });
      return;
    }
    

    // calling add user api

    this.userService.addUser(this.user).subscribe(
      (data) => {
        // console.log(data);
        this._snackBar.open("success","🙌",{
          duration:3000
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open("something went wrong try again","😔",{
          duration:3000
        });
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
