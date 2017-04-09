import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  chosenForm = '';
  orders;
  phases;
  project;
  tasks;
  finances;

  id;

  constructor(private route:ActivatedRoute, private router:Router, private ordersService:OrdersService, private phasesService:PhasesService, private financesService:FinancesService,
              private projectsService:ProjectsService) 
  {
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.projectsService.getProject(this.id).then(data => {
      this.project=data;
       });
  }

goToTasks(phaseNumber, id)
{
  console.log("YoloSwag");
  this.router.navigate(['/pages/tasks/'+id+'/'+phaseNumber]);
}

goToProducts(orderID, id)
{
  console.log("YoloSwag");
  this.router.navigate(['/pages/products/'+id+'/'+orderID]);
}

updateOrderPaymentStatus(paymentOption, orderID)
{
    this.ordersService.updateOrderPaymentStatus(paymentOption, orderID).then(data=>{
      this.refreshForm();
    });
}

updateStatus(statusOption, projectID)
{
    this.projectsService.updateStatus(statusOption, projectID).then(data=>{
      this.refreshForm();
    });
}



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

  	if(this.chosenForm == 'Orders' || this.chosenForm == 'Payment')
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
  refreshForm()
  {
    if(this.chosenForm == 'Orders' || this.chosenForm == 'Payment')
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

