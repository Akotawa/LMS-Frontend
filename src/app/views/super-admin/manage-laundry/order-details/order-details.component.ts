import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { UtilityService } from "../../../../shared/services/utility.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class orderDetailsComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [
    "userId",
    "userMobileNumber",
    "sourceLocation",
    "destinationLocation",
    "fair",
    "createdAt",
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public _utilityService: UtilityService
  ) {
    this.dataSource = _data;
  }

  ngOnInit() {}
}
