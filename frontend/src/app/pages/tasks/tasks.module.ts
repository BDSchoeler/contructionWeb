import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TasksComponent } from './tasks.component';
import { routing } from './tasks.routing';
import { FormsModule } from '@angular/forms';
import {TasksService} from '../services/tasks.service';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    routing,
    NgaModule
  ],
  declarations: [
    TasksComponent
  ],
  providers: [
  	TasksService
  ]
})
export class TasksModule {}