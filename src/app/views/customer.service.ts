import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  displayedColumns: string[] = [
    "orderId",
    "mobileNumber",
    "orderDate",
    "status",
    "netAmount",
    "action",
  ];
  constructor() { }
}
