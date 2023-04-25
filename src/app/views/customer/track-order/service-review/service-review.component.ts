import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../../../shared/services/utility.service';
import { AdminService } from '../../../admin/admin.service';
import { CustomerService } from '../../../customer.service';

@Component({
  selector: 'app-service-review',
  templateUrl: './service-review.component.html',
  styleUrls: ['./service-review.component.scss']
})
export class ServiceReviewComponent implements OnInit {
  registerReviewForm: FormGroup;
  sessionUser:any
  services = [];
  routeSub: any;
  constructor( 
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<ServiceReviewComponent>,
    private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _customerService: CustomerService,
    private _utilityService:UtilityService,
    private routes : ActivatedRoute,



    private router: Router) { 
      const formOptions = {
        'customerId': null,
        'orderId': null,
        'query': ['', Validators.required],
        'refundRewash': ['', Validators.required],
      };
      
      this.registerReviewForm = this.formBuilder.group(formOptions, {
      });
    }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
  }

submit(){
  const data = this.registerReviewForm.getRawValue();
  const laundryId = this.registerReviewForm.get('customerId').value; 
  data.customerId = this.sessionUser.id;
  data.orderId = this._data;


  this._customerService.refundRewash(data).then((response: any) => {
    this.registerReviewForm.reset()
    if (response && response.status == "OK") {
      this._utilityService.openMatSnackBar(
        response.message,
        response.status
      );
      this.matDialogRef.close(true);

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
