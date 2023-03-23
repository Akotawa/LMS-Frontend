import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerService } from '../../customer.service';
import { laundryDetailsComponent } from '../../super-admin/manage-laundry/details/details.component';
import { orderDetailsComponent } from '../../super-admin/manage-laundry/order-details/order-details.component';
import { SuperAdminService } from '../../super-admin/super-admin.service';
import { OrderDetailsComponent } from './order-details/order-details.component';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {
  dataSource: any[]=[
    {orderId: 5512121, orderDate:'20.02.2023', mobileNumber: 963852741, status:'pending', net:250}
    
  ];
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  displayedColumns: string[] = [];
  
  constructor(
    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _customerService: CustomerService,
    public _constantService: ConstantService
  ) { }

  ngOnInit() {
    
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._customerService.displayedColumns;
  }

  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    // this.getDataList();
  }
  view(id: any): void {
    let driverData = {};
    // this._driverService.driverRating(id).then((response1: any) => {
    //   driverData["driverRating"] = response1.data;
    //   this._driverService.getUserDetail(id).then((response: any) => {
    //     driverData["driverDetail"] = response.data;
    //     const dialogRef = this.dialog.open(DetailsComponent, {
    //       width: "900px",
    //       height: "530px",
    //       data: driverData,
    //       disableClose: true,
    //     });
    //   });
    // });

    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: "900px",
      height: "530px",
      // data: driverData,
      disableClose: true,
    });
  }
  

}

