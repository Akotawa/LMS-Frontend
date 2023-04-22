import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  displayedColumns: string[] = [
    "customerName",
    "contactNumber",
    "email",
    "orderStatus",
    "quantity",
    "servicereview",
    "rating",
    "feedback",
    "action",
  ];
  constructor(private _apiService: ApiService) { }

  contactAdd(data): Promise<any> {
    return this._apiService.post("customer/report", data);
  }

  refer(referid: any, email: any, data: any): Promise<any> {
    const url = `customer/referFriend/${referid}/${encodeURIComponent(email)}`;
    return this._apiService.post(url, data);
  }
  forgot(email: any, data: any): Promise<any> {
    const url = `customer/forgotPassword/${encodeURIComponent(email)}`;
    return this._apiService.post(url, data);
  }
  

  trackOrder(orderId: any): Promise<any> {
    const url = `customer/order/${orderId}`;
    return this._apiService.post(url,orderId);
  }

  trackOrderList(id:any): Promise<any> {
    return this._apiService.get(
      `customer/order/${id}`
    );
  }
  getFeedback(id:any): Promise<any> {
    return this._apiService.get(
  `laundry/${id}/feedbacks`
    );
  }
  
  changePassword(id: string, password: string, data): Promise<any> {
    return this._apiService.put(`password/update/${password}`, data);
  }

  refundRewash(data): Promise<any> {
    return this._apiService.post(`add/serviceReview`,data);
  }
  
  addFeedback(data): Promise<any> {
    return this._apiService.post(`feedback/add`,data);
  }
  
  getData(id:any): Promise<any> {
    return this._apiService.get(`ratings/get/${id}`);
  }

  getDataFeedback(id:any): Promise<any> {
    return this._apiService.get(`feedbacks/laundry/${id}`);
  }

  getOrderDetails(id:any): Promise<any> {
    return this._apiService.get(`get/order/${id}`);
  }

}
