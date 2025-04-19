import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TaskControllerService } from '../../service/task-controller.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-show-tasks',
  imports: [MatTableModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.css'
})

export class ShowTasksComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'responsible', 'status', 'devTime', 'qaTime', 'timeDone'];
  dataSource: any;

  constructor(private taskControllerService: TaskControllerService) { }

  ngOnInit() {
    const elements = this.taskControllerService.search().subscribe(
      (response) => {
        this.dataSource = response;
      });

  }
}
