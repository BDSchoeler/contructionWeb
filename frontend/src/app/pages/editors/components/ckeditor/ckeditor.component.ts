import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../projects/projects.service';
import {OrdersService} from '../../../services/orders.service';
import './ckeditor.loader';
import 'ckeditor';
import 'style-loader!./ckeditor.scss';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.html',
})

export class Ckeditor {
  public ckeditorContent:string = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  chosenAction = 'Add';
  orders;
  id;
  constructor(private route:ActivatedRoute, private ordersService:OrdersService) {
  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
}
  chosenForm = '';




  selectAction(choice) {
	if (this.chosenAction != choice)
	{
		this.chosenForm = '';
	}	

  	this.chosenAction = choice;
  }

  selectForm(choice)
  {
  	this.chosenForm = choice;

  	if(this.chosenForm == 'Orders')
  	{
  		this.ordersService.getOrdersByProjectID(this.id).then(data => {
  		this.orders=data;
  	});
  	}
  }
}

