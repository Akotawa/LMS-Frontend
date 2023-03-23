import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-password-change',
  templateUrl: './customer-password-change.component.html',
  styleUrls: ['./customer-password-change.component.scss']
})
export class CustomerPasswordChangeComponent implements OnInit {

  changeCustomerPasswordForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private router: Router) { 
      // const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'oldPassword': ['', Validators.required],
        // 'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'password': ['', Validators.required],
        'passwordConfirm': ['', Validators.required],
      };
  
      this.changeCustomerPasswordForm = this.formBuilder.group(formOptions, {
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
}
