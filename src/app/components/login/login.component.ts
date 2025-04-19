import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }
  login(loginForm: NgForm) {
    console.log("login succesfuly");
    console.log(loginForm.value);
  }

}
