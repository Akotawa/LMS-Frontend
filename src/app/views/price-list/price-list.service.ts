import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class PriceListService {
  displayedColumns: string[] = [
    "price",
    "createdAt",

  ];
  formGroup: FormGroup;
  constructor(public _apiService: ApiService, public formBuilder: FormBuilder) {

    // this.formGroup = this.formBuilder.group({
    //   price: ["", [Validators.required]],
    //   laundryId: ['', Validators.required],
    // });
  }

  deleteById(id): any {
    return this._apiService.delete(`promoCode/${id}/delete`);
  }


  getData(id:any): Promise<any> {
    return this._apiService.get(`get/Price/${id}`);
  }
  

  addPriceList(data): Promise<any> {
    return this._apiService.post("add/Price", data);
  }

  
}