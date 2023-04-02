import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class DriverService {
  displayedColumns: string[] = [
    "profileImage",
    "appId",
    "fullName",
    "mobileNumber",
    "createdAt",
    "status",
    "action",
  ];
  constructor(private _apiService: ApiService) { }

  deleteById(id): Promise<any> {
    return this._apiService.delete(`user/deleteUserById?id=${id}`);
  }

  acceptOrReject(id, status): any {
    return this._apiService.post(
      `laundry/changeStatus?id=${id}&status=${status}`,
      null
    );
  }

  getData(data): Promise<any> {
    return this._apiService.post(
      "user/getUserListByFilterWithPagination",
      data
    );
  }
  getUserDetail(id): Promise<any> {
    return this._apiService.get(`user/getUserDetailsById?id=${id}`);
  }
  getBookingList(id): Promise<any> {
    return this._apiService.get(
      `booking/getBookingListByDriverId?driverId=${id}`
    );
  }
  statusUser(id, active) {
    return this._apiService.post(
      `user/isActiveUser?id=${id}&active=${active}`,
      null
    );
  }
  driverRating(id): Promise<any> {
    return this._apiService.get(
      `rating/getRatingListByDriverId?driverId=${id}`
    );
  }
  feedbackDetails(id): Promise<any> {
    return this._apiService.get(
      `feedback/getFeedbackListByDriverId?driverId=${id}`
    );
  }
  tipDetails(id): Promise<any> {
    return this._apiService.get(`tip/getTipListByDriverId?driverId=${id}`);
  }
}
