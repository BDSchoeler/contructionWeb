import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  id;
  constructor(private route:ActivatedRoute) {
  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
  selectAction(choice) {
  		console.log(choice);
  		this.chosenAction = choice;
  		console.log(this.chosenAction);
  }
}

