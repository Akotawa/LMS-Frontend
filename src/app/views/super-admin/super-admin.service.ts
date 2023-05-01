import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class SuperAdminService {
  displayedColumns: string[] = [
    "appId",
    "companyName",
    "mobileNumber",
    "status",
    "action",
  ];

  constructor(
    private _apiService: ApiService,
    private _formBuilder: FormBuilder,
  ) { }

  deleteById(id): Promise<any> {
    return this._apiService.delete(`laundry/${id}/delete`);
  }

  acceptOrReject(id, status): any {
    return this._apiService.post(
      `cab/changeStatus?id=${id}&status=${status}`,
      null
    );
  }


  createRegisterForm(element: any): FormGroup {
    return this._formBuilder.group({
      firstName: element ? [element.firstName] : '',
      lastName: element ? [element.lastName] : '',
      email: element ? [element.email] : '',
      companyName: element ? [element.companyName] : '',
      city: element ? [element.city] : '',
      country: element ? [element.country] : '',
      businessType: element ? [element.businessType] : '',
      mobileNumber: element ? [element.mobileNumber] : '',
    });
  }

  // getData(data): Promise<any> {
  //   return this._apiService.post(
  //     "user/getUserListByFilterWithPagination",
  //     data
  //   );
  // }
  getUserDetail(id): Promise<any> {
    return this._apiService.get(`user/getUserDetailsById?id=${id}`);
  }
  getBookingList(id): Promise<any> {
    return this._apiService.get(
      `booking/getBookingListByDriverId?driverId=${id}`
    );
  }
  statusUser(id, active) {
    return this._apiService.put(
      `laundry/${id}/${active}`,
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

  getData(): Promise<any> {
    return this._apiService.get(`laundry`);
  }

  // laundryAdd(data): Promise<any> {
  //   return this._apiService.post("laundry/add", data);
  // }

  getlaundryDetails(id): Promise<any> {
    return this._apiService.get(`laundry/${id}`);
  }

  // addOrSaveData(data): any {
  //   return this._apiService.put(`laundry/update`, data);
  // }


  laundryAdd(data, id?: string): Promise<any> {
    if (id) {
      // update existing item
      data['id'] = id;
      return this._apiService.put(`laundry/update`, data);
    } else {
      // add new item
      return this._apiService.post("laundry/add", data);
    }
  }

}
