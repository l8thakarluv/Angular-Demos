import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';


export const routes: Routes = [
    { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodoListComponent }
];
