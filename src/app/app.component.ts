import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowTasksComponent } from "./components/show-tasks/show-tasks.component";
import { GeneralMenuComponent } from "./components/general-menu/general-menu.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowTasksComponent, ShowTasksComponent, GeneralMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
