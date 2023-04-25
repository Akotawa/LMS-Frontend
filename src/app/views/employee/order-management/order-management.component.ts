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
  displayedColumns: string[] = ['customerName', 'contactNumber', 'email', 'quantity','orderStatus','paymentStatus'];
  dataSource = ELEMENT_DATA;
  pagination: any;
  pageNumber: any = 1;
  isLoading = false;


  constructor(    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
    public _constantService: ConstantService,) { }

  ngOnInit() {
    this.getOrderList();
    this.pagination = this._utilityService.pagination;

  }
  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getOrderList();
  }

  getStatus(orderStatus) {
    if (orderStatus === 0) {
      return "Pending";
    } else if (orderStatus === 1) {
      return " received";
    } else if (orderStatus === 2) {
      return "completed";
    }
     else if (orderStatus === 3) {
      return "delivered";
    }
     else if (orderStatus === 4) {
      return "cancel";
    }
  }



  changeStatus(id: any, status: string, data: any) {
    this.isLoading = true;
    this._adminService.getOrderPicupDrop(id, status, data).then(
      (response: any) => {
        if (response && response.status) {
          this._utilityService.openMatSnackBar(
            "Status has been successfully updated",
            "OK"
          );
          this.isLoading = false;
          this.getOrderList();
        } else {
          this._utilityService.openMatSnackBar(
            response.message,
            response.status
          );
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
  
  setStatus(id, event) {
    this.isLoading=true;
    console.log(">> inside toogle", event);
    this._adminService.statusUser(id, event.checked).then((response: any) => {
      this._utilityService.openMatSnackBar(response.message, response.status);
      console.log(">>> Response is ", response);
      this.isLoading=false;
    });
  }


  getOrderList() {
    this._adminService.getOrderData().then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
      }
    });
  }
}
