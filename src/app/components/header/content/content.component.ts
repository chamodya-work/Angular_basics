import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  opened = false;
  instanceId = Math.random(); // Unique ID for debugging

  constructor(private menuService: MenuService) {
    this.menuService.isOpened.subscribe((data) => {
      this.opened = data;
    });
  }

  ngOnInit() {
    console.log('ContentComponent instance ID:', this.instanceId);
  }
}