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

    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      width: "900px",
      height: "530px",
      // data: driverData,
      disableClose: true,
    });
  }

  getDataList() {
    this._adminService.getData().then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
      }
    });
  }

}
