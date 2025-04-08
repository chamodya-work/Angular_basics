import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuService } from '../../service/menu.service';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private menuService: MenuService) { }
  toggleMenu() {
    this.menuService.toggle();

  }
}
