import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'products',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './products.html'
})
export class ProductsComponent {

	projectID;
	orderID;

	products;
  sum = 0;

  constructor(private route:ActivatedRoute, private productsService:ProductsService) {}
    ngOnInit(){
    	this.projectID = this.route.snapshot.params['projectID'];
    	this.orderID = this.route.snapshot.params['orderID'];


    	this.productsService.getProductsByOrderID(this.orderID).then(data=>{
    		this.products =  data;
        for(var i = 0; i < this.products.length; i++)
        {
          console.log(this.products[i].cost);
          console.log(this.products[i].amount);
          this.sum+= (this.products[i].cost * this.products[i].amount);
        }
    	})
    }




}