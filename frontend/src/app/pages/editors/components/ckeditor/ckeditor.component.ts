import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../../projects/projects.service';
import {OrdersService} from '../../../services/orders.service';
import {PhasesService} from '../../../services/phases.service';
import {FinancesService} from '../../../services/finances.service';
import {ProductsService} from '../../../services/products.service';
import {TasksService} from '../../../services/tasks.service';
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
  suppliers;
  products;
  timeToBuy = false;
  desiredSupplier;

  id;
  supplierID;

  constructor(private route:ActivatedRoute, private router:Router, private ordersService:OrdersService, private phasesService:PhasesService, private financesService:FinancesService,
              private projectsService:ProjectsService, private productsService:ProductsService, private tasksService:TasksService) 
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
      this.ngOnInit();
    });
}


updatePhase(phaseOption, projectID)
{
    /*this.projectsService.updatePhase(phaseOption, projectID).then(data=>{
      this.ngOnInit();
    });*/
}

addPhase(name, description, projectID)
{
    this.phasesService.addPhase(name, description, projectID);
}

addTask(phaseNumber, taskDescription, estimatedCost, estimatedTime, projectID)
{
  console.log(phaseNumber);
  console.log(taskDescription);
  console.log(estimatedCost);
  console.log(estimatedTime);
    this.tasksService.addTask(phaseNumber, taskDescription, estimatedCost, estimatedTime, projectID);
}

readyToBuy(selectedOrder)
{
  console.log(selectedOrder);

  for(var i = 0; i< this.orders.length; i++)
  {
    if(this.orders[i].orderID == selectedOrder)
    {
      console.log("Found!");
       this.desiredSupplier = this.orders[i].supplierID;
       console.log(this.desiredSupplier);
    }
  }
      this.productsService.getProductsBySupplier(this.desiredSupplier).then(data => {
      this.products=data;
       });

  this.timeToBuy = true;

}


  selectAction(choice) {
  	if (this.chosenAction != choice)
  	{
  		this.chosenForm = '';
      this.timeToBuy = false;
  	}	

  	this.chosenAction = choice;
  }

  selectForm(choice)
  {
    if(this.chosenForm != choice)
    {
      this.timeToBuy = false;
    }
  	this.chosenForm = choice;

  	if(this.chosenForm == 'Orders' || this.chosenForm == 'Payment' || this.chosenForm == 'Purchase')
  	{

  		this.ordersService.getOrdersByProjectID(this.id).then(data => {
  		this.orders=data;
  	   });

  	}
    else if(this.chosenForm == 'Phases' || this.chosenForm == 'Task' || this.chosenForm == 'Next Phase')
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
    else if(this.chosenForm == 'Order')
    {
      this.ordersService.getSuppliers().then(data => {
        this.suppliers=data;
      })

      this.phasesService.getPhasesByProjectID(this.id).then(data => {
      this.phases=data;
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
    else if(this.chosenForm == 'Order')
    {
      this.ordersService.getSuppliers().then(data => {
        this.suppliers=data;
      })

      this.phasesService.getPhasesByProjectID(this.id).then(data => {
      this.phases=data;
       });
    }
  }
}

