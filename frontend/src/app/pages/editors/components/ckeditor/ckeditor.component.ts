import { Component } from '@angular/core';

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

  constructor() {
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
  }
}

