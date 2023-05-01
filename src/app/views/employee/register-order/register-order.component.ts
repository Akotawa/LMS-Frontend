import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
  sessionUser: any
  services = [];
  routeSub: any;
  laundryList: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService: UtilityService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.registerorderForm = formBuilder.group({
      customerId: [null],
      laundryId: [null, Validators.required],
      serviceIdWithQuantity: this.formBuilder.array([
        this.formBuilder.group({
          quantity: new FormControl(1, Validators.required),
          serviceId: new FormControl('', Validators.required),
          payment: new FormControl('', Validators.required),
        })
      ])
    });
  }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.getAllList();
  }

  onAddSkills() {
    (<FormArray>this.registerorderForm.get('serviceIdWithQuantity')).push(this.formBuilder.group({
      quantity: new FormControl(1, Validators.required),
      serviceId: new FormControl('', Validators.required),
      payment: new FormControl('', Validators.required),
    }))
  }

  onSelectionChangeService(index, formGroup) {
    let service: any = this.services.find((item: any) => item.id === formGroup.controls.serviceId.value);
    formGroup.controls.payment.setValue(service.price * formGroup.controls.quantity.value);
  }

  onSelectionChangeQuantity(index, formGroup) {
    let service: any = this.services.find((item: any) => item.id === formGroup.controls.serviceId.value);
    formGroup.controls.payment.setValue(service.price * formGroup.controls.quantity.value);
  }

  submit() {
    const data = this.registerorderForm.getRawValue();
    data.customerId = this.sessionUser.id;
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
    this._adminService.getAllLaundry().then((resData: any) => {
      this.laundryList = resData.data;
    })
  }

  onSelectionChange(laundryId) {
    this._adminService.serviceList(laundryId).then((resData: any) => {
      this.services = resData.data;
    })
  }
}
