import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private _apiService: ApiService) {}

  booking(): any {
    return this._apiService.get(`booking/getBookingListByUserId?userId=2`);
  }

  getData(data): Promise<any> {
    return this._apiService.post(
      `booking/getBookingListByFilterWithPagination`,
      data
    );
  }

  getDashboardData(): any {
    return this._apiService.get(`get/details`);
  }}
