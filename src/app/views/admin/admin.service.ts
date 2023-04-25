import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  displayedColumns: string[] = [
    "firstName",
    "email",
    "mobileNumber",
    "city",
    "country",
    "action"
  ];

  // displayedColumnss: string[] = [
  //   "employeeId",
  //   "fullName",
  //   "mobileNumber",
  //   "role",
  //   "action",
  // ];
  constructor(private _apiService: ApiService,    private _formBuilder: FormBuilder,
    ) { }



  createRegisterForm(element: any): FormGroup {
    return this._formBuilder.group({
      userName: element ? [element.userName] : '',
      itemName: element ? [element.itemName] : '',
      email: element ? [element.email] : '',
      itemDescription: element ? [element.itemDescription] : '',
      payment: element ? [element.payment] : '',
      quantity: element ? [element.quantity] : '',
   
    });
}
createCustumerForm(element: any): FormGroup {
    return this._formBuilder.group({
      fullName: element ? [element.fullName] : '',
      email: element ? [element.email] : '',
      mobileNumber: element ? [element.mobileNumber] : '',
      password: element ? [element.password] : '',
   
    });
}





  // deleteById(id): Promise<any> {
  //   return this._apiService.delete(`user/deleteUserById?id=${id}`);
  // }

  deleteById(id): Promise<any> {
    return this._apiService.delete(`laundry/${id}/delete`);
  }

  deletebyId(id): Promise<any> {
    return this._apiService.delete(`Inventory/${id}/delete`);
  }

  acceptOrReject(id, status): any {
    return this._apiService.post(
      `cab/changeStatus?id=${id}&status=${status}`,
      null
    );
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
      `orderPaymentStatus/update/${id}/${active}`,
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
    return this._apiService.get(`employee/get`);
  }


  employeAdd(data): Promise<any> {
    return this._apiService.post("employee/add", data);
  }



  getOrderData(): Promise<any> {
    return this._apiService.get(`getAll/orders`);
  }

  getInventryData(): Promise<any> {
    return this._apiService.get(`Inventory/getAll`);
  }
  orderAdd(data): Promise<any> {
    return this._apiService.post("order/add", data);
  }

  serviceAdd(data): Promise<any> {
    return this._apiService.post("Service/add", data);
  }
  uploadImage(formData: any, fileName: any) {
    return this._apiService.post(`file/uploadFile?fileName=${fileName}`, formData)
  }

  
  serviceList(id:any): Promise<any> {
    return this._apiService.get(
      `service/getByLaundryId?laundryId=${id}`
    );
  }

  getOrderPicupDrop(id: number, status: string,data:any): Promise<any> {
    return this._apiService.post(`order/${id}/${status}/statusUpdate`,data);
  }

  getEmployeDetails(id): Promise<any> {
  return this._apiService.get(`employee/get/${id}`);
  }
  
  // laundryService(id): Promise<any> {
  // return this._apiService.get(`Service/${id}`);
  // }

  getAllService() {
    return this._apiService.get(`service/get`);
  }

  getPriceListByLaundryId(id:any) {
    return this._apiService.get(`get/Price/${id}`);
  }

  getInventoryDetails(id): Promise<any> {
    return this._apiService.get(`Inventory/get/${id}`);
  }

  // inventoryAdd(data): Promise<any> {
  //   return this._apiService.post("Item/add", data);
  // }

  inventoryAdd(data, id?: string): Promise<any> {
    if (id) {
      // update existing item
      data['id'] = id;
      return this._apiService.put(`Inventory/update`, data);
    } else {
      // add new item
      return this._apiService.post("Inventory/add", data);
    }
  }


  customerAdd(data): Promise<any> {
    return this._apiService.post("customer/add", data);
  }

  // getCustumerDetails(id): Promise<any> {
  //   return this._apiService.get(`Custumer/get/${id}`);  --- pending 
  // }


  // customerAdd(data, id?: string): Promise<any> {
  //   if (id) {
  //     // update existing item
  //     data['id'] = id;
  //     return this._apiService.put(`customer/add`, data);
  //   } else {
  //     // add new item
  //     return this._apiService.post("customer/add", data);
  //   }
  // }

}
