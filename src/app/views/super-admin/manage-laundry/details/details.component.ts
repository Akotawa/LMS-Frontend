import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UtilityService } from "../../../../shared/services/utility.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class laundryDetailsComponent implements OnInit {
  dataInfo: any;
  driverRating: any;
  displayedColumns: string[] = [
    "carName",
    "carNumber",
    "city",
    "state",
    "carModel",
    "licenseNumber",
    "registration",
  ];
  dataSource: any;
  average = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<laundryDetailsComponent>,
    public _utilityService: UtilityService,
    private dialog: MatDialog,
  ) {
    // this.dataInfo = _data["driverDetail"];
    // this.driverRating = _data["driverRating"];
    // let rating = 0;
    // for (const iterator of this.driverRating) {
    //   rating = rating + iterator["rating"];
    // }
    // this.average = rating / this.driverRating.length;
  }

  ngOnInit() {}

}
