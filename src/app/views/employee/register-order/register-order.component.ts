import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../../admin/admin.service';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.scss']
})
export class RegisterOrderComponent implements OnInit {
  registerorderForm: FormGroup;
  sessionUser:any
  services = [];
  routeSub: any;
  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService:UtilityService,
    private routes : ActivatedRoute,



    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {
        'laundryId': ['', Validators.required],
        'customerId': ['', Validators.required],
        'contactNumber': ['', Validators.required],
        'customerName': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'payment': ['', Validators.required],
        'quantity': ['', Validators.required],
        'serviceId': ['', Validators.required],
   

      };
  
      
      this.registerorderForm = this.formBuilder.group(formOptions, {
        // validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
      });
    }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.getAllList();
  }

submit(){
  const data = this.registerorderForm.getRawValue();

  const laundryId = this.registerorderForm.get('laundryId').value; // get the laundryId value
  data.customerId = this.sessionUser.id;
  console.log('laundryid value',laundryId);

data.laundryId = this.services.find(item=>item.serviceId === data.serviceId).laundryId;

  this._adminService.orderAdd(data).then((response: any) => {
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

getAllList() {
  this._adminService.getAllService().then((resData: any) => {
    this.services = resData.data;
    console.log(resData);
})}

}
