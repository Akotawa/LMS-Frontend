import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../../admin/admin.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-order-transit',
  templateUrl: './order-transit.component.html',
  styleUrls: ['./order-transit.component.scss']
})
export class OrderTransitComponent implements OnInit {
  sessionUser:any
  displayedColumns: string[] = ['customerName', 'contactNumber', 'serviceType', 'status'];
  dataSource = ELEMENT_DATA;
  constructor(    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
    public _constantService: ConstantService,) { }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    // this.getOrderList();
  }

  // getOrderList() {
  //   const id = this.sessionUser.id;
  //   const status = "active"; 
  //   this._adminService.getOrderPicupDrop(this.sessionUser.id, status).then((response: any) => {
  //     if (response && response.status === "OK" && response.data && response.data.length > 0) {
  //       this.dataSource = response.data;
  //     } else {
  //       this.dataSource = [];
  //     }
  //   }).catch((error: any) => {
  //     console.log("Error fetching order list", error);
  //     this.dataSource = [];
  //   });
  // }
  
}
