import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowTasksComponent } from "./components/show-tasks/show-tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowTasksComponent, ShowTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
