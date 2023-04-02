import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.scss']
})
export class ChangePasswordAdminComponent implements OnInit {
  sessionUser:any
  changepasswordForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private _utilityService:UtilityService,
    private _customerService: CustomerService) { 
      this.sessionUser = JSON.parse(localStorage.getItem("user"));
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'oldPassword': ['', Validators.required],
        // 'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'password': ['', Validators.required],
        'passwordConfirm': ['', Validators.required],
        'id': ['', Validators.required]

      };
  
      this.changepasswordForm = this.formBuilder.group(formOptions, {
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

changePassword() {
  const data = this.changepasswordForm.getRawValue();
  const id = this.changepasswordForm.get('id').value;
  data.id = this.sessionUser.laundryid;
    console.log('cutomerid value', id);

  this._customerService.changePassword(this.sessionUser.id, data.password, data).then((response: any) => {
    this.changepasswordForm.reset()
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
