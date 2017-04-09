import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ProductsComponent } from './products.component';
import { routing } from './products.routing';
import { FormsModule } from '@angular/forms';
import {ProductsService} from '../services/products.service';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    routing,
    NgaModule
  ],
  declarations: [
    ProductsComponent
  ],
  providers: [
  	ProductsService
  ]
})

export class ProductsModule {}