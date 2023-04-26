import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../shared/services/utility.service';
import { AddCouponComponent } from '../../super-admin/coupons/add-coupon/add-coupon.component';
import { CouponsService } from '../../super-admin/coupons/coupons.service';
import { PriceListService } from '../price-list.service';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.scss']
})
export class AddPriceComponent implements OnInit {
  PriceData: FormGroup;
  sessionUser:any
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<AddPriceComponent>,
    public _priceListService: PriceListService,
    public _utilityService : UtilityService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,

  ) {

    const formOptions = {
      'laundryId': '',
      'price': ['', Validators.required],
    };
    this.PriceData = this.formBuilder.group(formOptions, {
    });
  }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  sumit() {
    const data = this.PriceData.getRawValue();
    const laundryId = this.PriceData.get('laundryId').value; // get the laundryId value
    data.laundryId = this.sessionUser.laundryid;
    console.log('laundryid value',laundryId);
    this._priceListService.addPriceList(data)
      .then((response: any) => {
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