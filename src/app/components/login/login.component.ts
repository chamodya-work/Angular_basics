import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';
import { UserService } from '../../service/user.service';
import { UserAuthService } from '../../service/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService

  ) { }
  ngOnInit(): void {

  }
  login(loginForm: NgForm) {
    // console.log("login succesfuly");
    // console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
