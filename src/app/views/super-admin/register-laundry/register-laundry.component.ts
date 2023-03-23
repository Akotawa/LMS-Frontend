import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperAdminComponent } from '../super-admin.component';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-register-laundry',
  templateUrl: './register-laundry.component.html',
  styleUrls: ['./register-laundry.component.scss']
})
export class RegisterLaundryComponent implements OnInit {
  registerLaundryForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private _superadminservice: SuperAdminService,
    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'password': ['', Validators.required],
        'passwordConfirm': ['', Validators.required],
        'companyName': ['', Validators.required],
        'city': ['', Validators.required],
        'country': ['', Validators.required],
        'businessType': ['', Validators.required],
        'mobileNumber': ['', Validators.required],
        'companyMail':['', Validators.required]

      };
  
      this.registerLaundryForm = this.formBuilder.group(formOptions, {
        validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
      });
    }

  ngOnInit() {
  }

  matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): any {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (!password.value || !confirmPassword.value) {
        return null;
      }
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
      return null;
    };

}

sumit(){
  const data = this.registerLaundryForm.getRawValue();
  this._superadminservice.laundryAdd(data).then((response: any) => {
    console.log(response);
  });
}
}
