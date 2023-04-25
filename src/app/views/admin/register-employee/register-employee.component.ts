import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  registerLaundryForm: FormGroup;
  isLoading=false;
  sessionUser:any;
  maxDate: Date = new Date();

  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService:UtilityService,
    private router: Router
    ) {
      this.sessionUser = JSON.parse(localStorage.getItem("user"));
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'userType': ['', Validators.required],
        // 'passwordConfirm': ['', Validators.required],
        'city': ['', Validators.required],
        'dob': ['', Validators.required],
        'country': ['', Validators.required],
        'address': ['', Validators.required],
        'mobileNumber': ['', Validators.required],
        'pincode':['', Validators.required],
        'laundryid':null
      };
  
      this.registerLaundryForm = this.formBuilder.group(formOptions, {
        // validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
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
  this.isLoading=true;
  const data = this.registerLaundryForm.getRawValue();
  data.laundryid = this.sessionUser.laundryid;
  this._adminService.employeAdd(data).then((response: any) => {
    this.isLoading=false;

    this.registerLaundryForm.reset()

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
