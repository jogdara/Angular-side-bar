import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

   firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

}