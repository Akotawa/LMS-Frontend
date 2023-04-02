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
  filter: any;
  pageNumber: any = 1;
  pagination: any;
  isLoading = false;

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
    this.getDataList();
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._sAdminService.displayedColumns;

  }

  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getDataList();
  }

  view(id: any): void {
    this.isLoading=true;
    this._superadminservice.getlaundryDetails(id).then((Response: any) => {
      const dialogRef = this.dialog.open(laundryDetailsComponent, {
        width: "650px",
        data: Response.data,
        disableClose: true,

      });
      this.isLoading=false;

    });
  }

  getDataList() {
    this.isLoading=true;
    this._superadminservice.getData().then((response: any) => {
      this.dataSource=response.data
      this.isLoading=false;

      })
  }

  setStatus(id, event) {
    this.isLoading=true;
    console.log(">> inside toogle", event);
    this._superadminservice.statusUser(id, event.checked).then((response: any) => {
      this._utilityService.openMatSnackBar(response.message, response.status);
      console.log(">>> Response is ", response);
      this.isLoading=false;
    });
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

    deleteById(id: any){
    if (confirm("Are you sure you want to delete this Laundry?")) {
      this._superadminservice.deleteById(id)
          .then((response: any) => {
              if (response && response.status == 'OK') {
                  this.ngOnInit();
                  this._utilityService.openMatSnackBar(response.message, response.status);
              } else {
                  this._utilityService.openMatSnackBar(response.message, response.status);
              }
          }, error => {
              this._utilityService.openMatSnackBar("Internal Server error", 'ERROR');
          });
  }
  }

}
