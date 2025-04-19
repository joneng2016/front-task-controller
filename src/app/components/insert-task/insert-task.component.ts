import { ChangeDetectionStrategy, Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { TaskControllerService } from '../../service/task-controller.service';

@Component({
  selector: 'app-insert-task',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatGridListModule, MatButtonModule],
  templateUrl: './insert-task.component.html',
  styleUrl: './insert-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InsertTaskComponent {
  protected readonly value = signal('');
  isConcluded = false;

  constructor(private taskControllerService: TaskControllerService, private cdr: ChangeDetectorRef) { }

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  execInput(taskName:any, responsible:any, status:any, description:any, devTime:any, qaTime:any, doneTime:any) {
    const inputData = {
      name:taskName.value,
      description: description.value,
      status:status.value,
      devTime:devTime.value,
      qaTime:qaTime.value, 
      timeDone:doneTime.value,
      responsible:responsible.value,
      createdAt:"2025-10-01",
    }

    this.taskControllerService.insert(inputData).subscribe((response) => {
      this.isConcluded = response.task.id != undefined
      this.cdr.detectChanges();
    })

  }
}
