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
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'contactNumber', 'serviceType', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
    public _constantService: ConstantService,) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this._adminService.getOrderData().then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
      }
    });
  }
}
