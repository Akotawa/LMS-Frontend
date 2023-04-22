import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../shared/services/utility.service';
import { CustomerService } from '../../views/customer.service';

@Component({
  selector: 'portal-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  sessionUser:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _customerService: CustomerService,
    public _utilityService: UtilityService,
  ) { 
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      'email': ['', Validators.required],
    });
  }

  submit() {
    const data = this.forgotForm.getRawValue();
    const email = this.forgotForm.get('email').value;
    this._customerService.forgot(email, data).then((response: any) => {
      this.forgotForm.reset()
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
goToLogin(): void {
  this.router.navigate(['/external/login']);
}
}

 

