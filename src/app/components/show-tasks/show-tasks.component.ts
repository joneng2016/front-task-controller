import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TaskControllerService } from '../../service/task-controller.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-show-tasks',
  imports: [MatTableModule, MatIconModule, MatDividerModule, MatButtonModule, MatSelectModule, MatInputModule],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.css'
})

export class ShowTasksComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'responsible', 'status', 'devTime', 'qaTime', 'timeDone'];
  dataSource: any;
  positionNumber: number = 0;
  valueOfSearch: string = '';

  constructor(private taskControllerService: TaskControllerService) { }

  ngOnInit() {
    const elements = this.taskControllerService.search().subscribe(
      (response) => {
        this.dataSource = response;
      });

  }

  nextPage() {
    this.positionNumber++;
    const elements = this.taskControllerService.search(this.positionNumber).subscribe(
      (response) => {
        this.dataSource = response;
      }
    );
  }

  backPage() {
    this.positionNumber--;
    this.positionNumber = this.positionNumber < 0 ? 0 : this.positionNumber;

    const elements = this.taskControllerService.search(this.positionNumber).subscribe(
      (response) => {
        this.dataSource = response;
      }
    );
  }

  find(valueOfSearch:string, nameField:string) {
    this.taskControllerService.searchByElement(nameField, valueOfSearch).subscribe(
      (response) => {
        this.dataSource = response.tasks;
      }
    );
  }
}
