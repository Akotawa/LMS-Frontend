import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerService } from '../../customer.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ServiceReviewComponent } from './service-review/service-review.component';
import { RatingComponent } from './rating/rating.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminService } from '../../admin/admin.service';
import { AssignMachineComponent } from '../../employee/order-management/assign-machine/assign-machine.component';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {
  dataSource: any[] = [];
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  displayedColumns: string[] = [];
  sessionUser: any;
  routeSub: any;

  constructor(
    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _customerService: CustomerService,
    public _constantService: ConstantService,
    public _adminService: AdminService,
    private routes: ActivatedRoute

  ) {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  ngOnInit() {
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._customerService.displayedColumns;
    this.getAllList()
  }

  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getAllList();
  }

  // view(id: any): void {
  //   const dialogRef = this.dialog.open(OrderDetailsComponent, {
  //     width: "900px",
  //     height: "530px",
  //     data: Response,
  //     disableClose: true,
  //   });
  // }
  view(id: number): void {
    this._customerService.getOrderDetails(id).then((Response: any) => {
      const dialogRef = this.dialog.open(OrderDetailsComponent, {
        width: "650px",
        data: Response.data
      });
    });
  }

  getAllList() {
    this._customerService.trackOrderList(this.sessionUser.id).then((resData: any) => {
      this.dataSource = resData.data;
    })
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



  addServiceReview(id: any) {
    const dialogRef = this.dialog.open(ServiceReviewComponent, {
      width: "700px",
      height: "430px",
      disableClose: true,
      data: id
    });
  }
  addServiceRating(id: any) {
    const dialogRef = this.dialog.open(RatingComponent, {
      width: "700px",
      height: "300px",
      disableClose: true,
      data: id
    });
  }
  addServiceFeedback(id: any) {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      width: "700px",
      height: "300px",
      disableClose: true,
      data: id
    });
  }



  changeStatus(id: any, status: string, data: any) {
    this._adminService.getOrderPicupDrop(id, status, data).then(
      (response: any) => {
        if (response && response.status) {
          this._utilityService.openMatSnackBar(
            "Status has been successfully updated",
            "OK"
          );
          this.getAllList()

        } else {
          this._utilityService.openMatSnackBar(
            response.message,
            response.status
          );
        }
      },
      (error) => {
      }
    );
  }

}
