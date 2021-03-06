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
import {FinancesService} from '../services/finances.service';
import {ProductsService} from '../services/products.service';



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
  TasksService,
  FinancesService,
  ProductsService
  ]
})
export class EditorsModule {
}
