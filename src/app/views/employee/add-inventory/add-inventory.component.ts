import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../../admin/admin.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  registerorderForm: FormGroup;

   
  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService:UtilityService,


    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'userName': ['', Validators.required],
        'itemName': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'itemDescription': ['', Validators.required],
        // 'pasword': ['', Validators.required],
        'payment': ['', Validators.required],
        'quantity': ['', Validators.required],
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
  this._adminService.inventoryAdd(data).then((response: any) => {
    this.registerorderForm.reset()
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
