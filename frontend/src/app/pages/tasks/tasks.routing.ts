import { Routes, RouterModule }  from '@angular/router';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
   path: ':projectID/:phaseID',
   //path: '',
    component: TasksComponent
  }
];

export const routing = RouterModule.forChild(routes)