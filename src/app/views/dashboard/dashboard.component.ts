import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Color } from "ng2-charts";
import { DeshboardDetailsComponent } from "../../dashboards/analytics/deshboard-details/deshboard-details.component";
import { ConstantService } from "../../shared/services/constants.service";
import { UtilityService } from "../../shared/services/utility.service";
import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];
  // lineChartLabels: Label [] = ['January', 'February', 'March', 'April', 'May', 'June'];
  // lineChartOptions = {
  //   responsive: true,
  // };
  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];
  // lineChartLegend = true;
  // lineChartPlugins = [];
  // lineChartType = 'line';
  displayedColumns: string[] = [
    "driverId",
    "userId",
    "userMobileNumber",
    "sourceLocation",
    "destinationLocation",
    "createdAt",
  ];
  dataSource: any;
  pagination: any;
  filter: any;
  pageNumber: any = 1;

  constructor(
    public dialog: MatDialog,
    private _dashboardService: DashboardService,
    public _utilityService: UtilityService,
    public _constantService: ConstantService
  ) {}

  ngOnInit(): void {
    this.getDataList()
    // this.pagination = this._utilityService.pagination;
    // this.getDataList();
  }

  // getNextPageData(page: any) {
  //   this.pagination.currentPage = page.pageIndex + 1;
  //   this.pagination.perPage = page.pageSize;
  //   this.getDataList();
  // }
  getDataList() {
    this._dashboardService.getDashboardData().then((response: any) => {
      this.dataSource = response.data;
      console.log(this.dataSource);
      
    });
  }
}
