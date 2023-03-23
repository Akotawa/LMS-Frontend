import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  registerLaundryForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,


    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'password': ['', Validators.required],
        'passwordConfirm': ['', Validators.required],
        'dob': ['', Validators.required],
        'city': ['', Validators.required],
        'country': ['', Validators.required],
        'address': ['', Validators.required],
        'mobileNumber': ['', Validators.required],
        'pincode':['', Validators.required]

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

submit(){
  const data = this.registerLaundryForm.getRawValue();
  this._adminService.employeAdd(data).then((response: any) => {
    console.log(response);
  });
}

}
