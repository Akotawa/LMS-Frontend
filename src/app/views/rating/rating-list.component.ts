import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ConstantService } from "../../shared/services/constants.service";
import { UtilityService } from "../../shared/services/utility.service";
import { AddRatingComponent } from "./add-rating/add-rating.component";
import { RatingListService } from "./rating-list.service";

@Component({
  selector: "app-rating-list",
  templateUrl: "./rating-list.component.html",
  styleUrls: ["./rating-list.component.scss"],
})
export class RatingListComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  pagination: any;
  filter: any;
  pageNumber: any = 1;
  filterInput: string = null;
  isLoading=false;
  sessionUser:any
  stars: any;
  
  @Input() rating: number;

  constructor(
    public dialog: MatDialog,
    public _utilityService: UtilityService,
    public _constantService: ConstantService,
    public _ratingListService: RatingListService,

  ) {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.getDataList();
    this.pagination = this._utilityService.pagination;
    this.displayedColumns = this._ratingListService.displayedColumns;


    
  }
  getNextPageData(page: any) {
    this.pagination.currentPage = page.pageIndex + 1;
    this.pagination.perPage = page.pageSize;
    this.getDataList();
  }

  addRating() {
    const dialogRef = this.dialog.open(AddRatingComponent, {
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
    this._ratingListService.getData(this.sessionUser.id).then((response: any) => {
      this.dataSource = response.data;

    });
  }



}

