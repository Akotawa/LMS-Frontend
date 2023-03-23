import { Component, Inject, inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UtilityService } from "../../../../shared/services/utility.service";
import { laundryDetailsComponent } from "../details/details.component";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class laundryFeedbackComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [
    "bookingId",
    "driverId",
    "userId",
    "feedback",
    "createdAt",
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<laundryDetailsComponent>,
    public _utilityService: UtilityService
  ) {
    this.dataSource = _data;
    }

  ngOnInit() {}
}
