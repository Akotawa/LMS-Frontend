import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../admin.service';
import { ViewDetailsComponent } from './view-details/view-details.component';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {
  dataSource: any[]=[];
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  displayedColumns: string[] = [];
  isLoading=false;
  
  constructor(
    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
    public _constantService: ConstantService,
  ) { }

  ngOnInit() {
    
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._adminService.displayedColumns;
    this.getDataList();

  }

  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getDataList();
  }
  view(id: any): void {
    this.isLoading=true;
    this._adminService.getEmployeDetails(id).then((Response: any) => {
      this.isLoading=false;
      const dialogRef = this.dialog.open(ViewDetailsComponent, {
        width: "650px",
        data: Response.data,
        disableClose: true,

      });
    });
  }

  getDataList() {
    this.isLoading=true;
    this._adminService.getData().then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
        this.isLoading=false
      }
    });
  }

  deleteById(id: any){
    if (confirm("Are you sure you want to delete this?")) {
      this._adminService.deleteById(id)
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



  // getStatus(orderStatus) {
  //   if (orderStatus === 0) {
  //     return "Pending";
  //   } else if (orderStatus === 1) {
  //     return " received";
  //   } else if (orderStatus === 2) {
  //     return "completed";
  //   }
  //    else if (orderStatus === 3) {
  //     return "delivered";
  //   }
  //    else if (orderStatus === 4) {
  //     return "cancel";
  //   }
  // }


  // changeStatus(id: any, status: string, data: any) {
  //   this.isLoading = true;
  //   this._adminService.getOrderPicupDrop(id, status, data).then(
  //     (response: any) => {
  //       if (response && response.status) {
  //         this._utilityService.openMatSnackBar(
  //           "Status has been successfully updated",
  //           "OK"
  //         );
  //         this.isLoading = false;
  //         this.getDataList();
  //       } else {
  //         this._utilityService.openMatSnackBar(
  //           response.message,
  //           response.status
  //         );
  //         this.isLoading = false;
  //       }
  //     },
  //     (error) => {
  //       this.isLoading = false;
  //     }
  //   );
  // }

}
