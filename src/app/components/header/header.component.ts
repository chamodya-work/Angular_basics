import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuService } from '../../service/menu.service';
import { Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../../service/user-auth.service';
import { NgIf } from '@angular/common';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  standalone: true, // Added
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NgIf], // Added
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private menuService: MenuService,
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) { }

  toggleMenu() {
    this.menuService.toggle();
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logOut() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}