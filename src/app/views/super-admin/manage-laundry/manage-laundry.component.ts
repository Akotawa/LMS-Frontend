import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { SuperAdminService } from '../super-admin.service';
import { laundryDetailsComponent } from './details/details.component';
import { laundryFeedbackComponent } from './feedback/feedback.component';
import { orderDetailsComponent } from './order-details/order-details.component';

@Component({
  selector: 'app-manage-laundry',
  templateUrl: './manage-laundry.component.html',
  styleUrls: ['./manage-laundry.component.scss']
})
export class ManageLaundryComponent implements OnInit {
  dataSource: any[]=[];
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  displayedColumns: string[] = [];
  
  constructor(
    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _sAdminService: SuperAdminService,
    public _constantService: ConstantService,
    private _superadminservice: SuperAdminService,

  ) { }

  ngOnInit() {
    
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._sAdminService.displayedColumns;
    this.getDataList();

  }

  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getDataList();
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

    const dialogRef = this.dialog.open(laundryDetailsComponent, {
      width: "900px",
      height: "530px",
      // data: driverData,
      disableClose: true,
    });
  }

  getDataList() {
    this._superadminservice.getData().then((response: any) => {
      this.dataSource=response.data
      })
  }

  setStatus(id, event) {
    console.log(">> inside toogle", event);

    // this._driverService.statusUser(id, event.checked).then((response: any) => {
    //   this._utilityService.openMatSnackBar(response.message, response.status);
    //   console.log(">>> Response is ", response);
    // });
  }
  orderDetails(id) {
    // this._driverService.getBookingList(id).then((response: any) => {
    //   const dialogRef = this.dialog.open(BookingDetailsComponent, {
    //     width: "850px",
    //     data: response.data,
    //     disableClose: true,
    //   });
    // });

    const dialogRef = this.dialog.open(orderDetailsComponent, {
      width: "850px",
      // data: response.data,
      disableClose: true,
    });
  }

  // tipDetails(id) {
  //   this._driverService.tipDetails(id).then((respnse: any) => {
  //     const dialogRef = this.dialog.open(TipHistoryComponent, {
  //       width: "850px",
  //       data: respnse.data,
  //       disableClose: true,
  //     });
  //   });
  // }
  feedbackDetails(id) {
    // this._driverService.feedbackDetails(id).then((response: any) => {
    //   const dialogRef = this.dialog.open(FeedbackComponent, {
    //     data: response.data,
    //     width: "850 px",
    //     disableClose: true,
    //   });
    // });

    const dialogRef = this.dialog.open(laundryFeedbackComponent, {
      // data: response.data,
      width: "850 px",
      disableClose: true,
    });
  }

}
