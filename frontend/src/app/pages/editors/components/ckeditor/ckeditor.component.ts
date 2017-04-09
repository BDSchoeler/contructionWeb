import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../projects/projects.service';
import {OrdersService} from '../../../services/orders.service';
import {PhasesService} from '../../../services/phases.service';
import {FinancesService} from '../../../services/finances.service';
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
  phases;
  project;
  tasks;
  finances;

  id;

  constructor(private route:ActivatedRoute, private ordersService:OrdersService, private phasesService:PhasesService, private financesService:FinancesService) {
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
    else if(this.chosenForm == 'Phases')
    {
      this.phasesService.getPhasesByProjectID(this.id).then(data => {
      this.phases=data;
       });
    }
    else if(this.chosenForm == 'Finances')
    {
      this.financesService.getFinancesByProjectID(this.id).then(data => {
      this.finances=data;
       });
    }
  }
}

