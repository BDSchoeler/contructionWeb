import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';

import {ProjectsService} from '../projects/projects.service';
import {OrdersService} from '../services/orders.service';
import {PhasesService} from '../services/phases.service';
import {TasksService} from '../services/tasks.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Editors,
    Ckeditor
  ],
  providers: [
  ProjectsService,
  OrdersService,
  PhasesService,
  TasksService
  ]
})
export class EditorsModule {
}
