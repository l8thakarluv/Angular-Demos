import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
// import { TodoComponent } from './todo/todo.component';

const mfeAppUrl = 'http://localhost:4300/remoteEntry.js';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
//   { path: 'todo-list', component: TodoComponent }

// loading mfe-appas a todo list component
  { 
    path: 'todo-list', 
    loadComponent: () =>
        loadRemoteModule({
            // type: 'module',
            remoteName: 'mfeApp',
            remoteEntry: mfeAppUrl,
            exposedModule: './TodoListComponent'
        }).then(x => x.TodoListComponent).catch(err => console.log('errorrrrrrrrrrrrrrr', err))
        // loadRemoteModule(
        //     'mfeApp',
        //     // remoteEntry: mfeAppUrl,
        //     './Component'
        // ).then(x => x.TodoListComponent).catch(err => console.log('errorrrrrrrrrrrrrrr', err))
  }  

];
