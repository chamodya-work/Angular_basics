import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }
  login(loginForm: NgForm) {
    console.log("login succesfuly");
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
