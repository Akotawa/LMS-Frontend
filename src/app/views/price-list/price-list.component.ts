import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ConstantService } from "../../shared/services/constants.service";
import { UtilityService } from "../../shared/services/utility.service";
import { CouponsService } from "../super-admin/coupons/coupons.service";
import { AddPriceComponent } from "./add-price/add-price.component";
import { PriceListService } from "./price-list.service";

@Component({
  selector: "app-price-list",
  templateUrl: "./price-list.component.html",
  styleUrls: ["./price-list.component.scss"],
})
export class PriceListComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  isLoading=false;
  sessionUser:any
  constructor(
    public dialog: MatDialog,
    public _utilityService: UtilityService,
    private _priceListService: PriceListService,
    public _constantService: ConstantService
  ) {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.getDataList();

    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._priceListService.displayedColumns;
  }
  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getDataList();
  }

  addPrice() {
    const dialogRef = this.dialog.open(AddPriceComponent, {
      width: "40%",
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.getDataList(); // refresh the coupon list
      }
    });
  }
  
  
  
  



  // deleteById(id: any){
  //   this.isLoading=true;
  //   if (confirm("Are you sure you want to delete this coupon?")) {
  //     this._priceListService.deleteById(id)
  //         .subscribe((response: any) => {
  //             if (response && response.status == 'OK') {
  //               this.ngOnInit();
  //                 this.isLoading=false;
  //                 this._utilityService.openMatSnackBar(response.message, response.status);
  //             } else {
  //                 this._utilityService.openMatSnackBar(response.message, response.status);
  //             }
  //         }, error => {
  //             this._utilityService.openMatSnackBar("Internal Server error", 'ERROR');
  //         });
  //   }
  // }
  



  getDataList() {
    this._priceListService.getData(this.sessionUser.laundryid).then((response: any) => {
      if (response && response.status === "OK") {
        this.dataSource = response.data;
      }
    });
  }
}

