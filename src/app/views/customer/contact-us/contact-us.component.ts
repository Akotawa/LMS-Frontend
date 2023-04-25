import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private router: Router,
    private _utilityService:UtilityService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
    });
  }

  submit(){
    const data = this.contactForm.getRawValue();
    this._customerService.contactAdd(data).then((response: any) => {
      this.contactForm.reset()
      if (response && response.status == "OK") {
        this._utilityService.openMatSnackBar(
          response.message,
          response.status
        );
      } else {
        this._utilityService.openMatSnackBar(
          response.message,
          response.status
        );
      }
    },
    (error) => {
      this._utilityService.openMatSnackBar("Internal Server error", "ERROR");
    }
  );
  }


}
