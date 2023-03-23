import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  displayedColumns: string[] = [
    "profileImage",
    "appId",
    "fullName",
    "mobileNumber",
    "createdAt",
    "status",
    "action",
  ];

  constructor(private _apiService: ApiService) {}

  deleteById(id): Promise<any> {
    return this._apiService.delete(`user/deleteUserById?id=${id}`);
  }

  getData(data): Promise<any> {
    return this._apiService.post(
      `user/getUserListByFilterWithPagination`,
      data
    );
  }
  getUserDetail(id): Promise<any> {
    return this._apiService.get(`user/getUserDetailsById?id=${id}`);
  }

  getBookingList(id) {
    return this._apiService.get(`booking/getBookingListByUserId?userId=${id}`);
  }
  statusUser(id, active) {
    return this._apiService.post(
      `user/isActiveUser?id=${id}&active=${active}`,
      null
    );
  }
}
