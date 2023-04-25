import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { laundryDetailsComponent } from '../../../super-admin/manage-laundry/details/details.component';
import { CustomerService } from '../../../customer.service';
import { orderDetailsComponent } from '../../../super-admin/manage-laundry/order-details/order-details.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  dataInfo: any;
  sessionUser: any;
  dataSource: any;
  displayedColumns: string[] = [
    "rating",
  ];
  constructor(
     @Inject(MAT_DIALOG_DATA) private _data: any,
  public matDialogRef: MatDialogRef<orderDetailsComponent>,
  public _utilityService: UtilityService,
  public _custumerService: CustomerService,
  private dialog: MatDialog,) {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.dataInfo = _data;

   }

  ngOnInit() {
    // this.getDataList()
    // this.getDataListFeedback()
  }



  // getDataList() {
  //   this._custumerService.getData(this.sessionUser.id).then((response: any) => {
  //     this.dataSource = response.data;

  //   });
  // }
  // getDataListFeedback() {
  //   this._custumerService.getDataFeedback(this.sessionUser.id).then((response: any) => {
  //     this.dataSource = response.data;

  //   });
  // }
}
