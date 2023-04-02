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
    "netAmount",
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

  trackOrder(orderId: any): Promise<any> {
    const url = `customer/order/${orderId}`;
    return this._apiService.post(url,orderId);
  }

  trackOrderList(id:any): Promise<any> {
    return this._apiService.get(
      `customer/order/${id}`
    );
  }
  
  changePassword(id: string, password: string, data): Promise<any> {
    return this._apiService.post(`password/update${id}?password=${password}`, data);
  }
  

}
