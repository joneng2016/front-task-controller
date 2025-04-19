import { Routes } from '@angular/router';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { InsertTaskComponent } from './components/insert-task/insert-task.component';
export const routes: Routes = [
    { path: 'search', component: ShowTasksComponent },
    { path: 'insert', component: InsertTaskComponent }, 
];
