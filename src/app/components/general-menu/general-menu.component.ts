import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-menu',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './general-menu.component.html',
  styleUrl: './general-menu.component.css'
})
export class GeneralMenuComponent {
  constructor(private router: Router) { }

  changeScreen(name: string) {
    this.router.navigate([name]);
  }
}
