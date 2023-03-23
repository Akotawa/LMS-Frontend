import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit {

  registerorderForm: FormGroup;

   
  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,


    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'laundryId': ['', Validators.required],
        'quantity': ['', Validators.required],
        'serviceDescription': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'serviceName': ['', Validators.required],
   

      };
      
      this.registerorderForm = this.formBuilder.group(formOptions, {
        // validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
      });
    }

  ngOnInit() {
  }
//   matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): any {
//     return (group: FormGroup) => {
//       const password = group.controls[passwordKey];
//       const confirmPassword = group.controls[confirmPasswordKey];

//       if (!password.value || !confirmPassword.value) {
//         return null;
//       }
//       if (password.value !== confirmPassword.value) {
//         return {
//           mismatchedPasswords: true
//         };
//       }
//       return null;
//     };

// }
submit(){
  const data = this.registerorderForm.getRawValue();
  this._adminService.serviceAdd(data).then((response: any) => {
    console.log(response);
  });
}

}
