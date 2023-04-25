import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Route, Router } from '@angular/router';
import { ConstantService } from '../../../shared/services/constants.service';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../../admin/admin.service';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
// import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {

  displayedColumns: string[] = ['itemName', 'userName', 'email','quantity', 'itemDescription','action'];
  dataSource = ELEMENT_DATA;
  pageNumber: any = 1;
  pagination: any;
  constructor(    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
    private _route : Router,
    public _constantService: ConstantService,) { }

  ngOnInit() {
    this.pagination = this._utilityService.pagination;
    this.getInventryList();
  }
  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getInventryList();
  }

  getInventryList() {
    this._adminService.getInventryData().then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
      }
    });
  }

  view(id: any): void {
    this._adminService.getInventoryDetails(id).then((Response: any) => {
      const dialogRef = this.dialog.open(InventoryDetailsComponent, {
        width: "650px",
        data: Response.data,
        disableClose: true,
      });
    });
  }

  deleteById(id: any){
    if (confirm("Are you sure you want to delete this?")) {
      this._adminService.deletebyId(id)
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

  
  edit(element: any): void {
    this._route.navigateByUrl('/employee/Inventory-Add/' + element);
  }

  
}
