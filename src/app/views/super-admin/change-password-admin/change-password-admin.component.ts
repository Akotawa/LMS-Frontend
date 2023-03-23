import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.scss']
})
export class ChangePasswordAdminComponent implements OnInit {

  changepasswordForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'oldPassword': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'password': ['', Validators.required],
        'passwordConfirm': ['', Validators.required],
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

}
