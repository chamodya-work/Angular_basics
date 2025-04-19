import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuService } from '../../service/menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Added
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink], // Added
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private menuService: MenuService) { }
  toggleMenu() {
    this.menuService.toggle();
  }
}