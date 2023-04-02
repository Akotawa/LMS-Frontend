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
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {

  displayedColumns: string[] = ['itemName', 'userName', 'email','quantity', 'itemDescription'];
  dataSource = ELEMENT_DATA;
  pageNumber: any = 1;
  pagination: any;
  constructor(    private dialog: MatDialog,
    public _utilityService: UtilityService,
    private _adminService: AdminService,
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
}
