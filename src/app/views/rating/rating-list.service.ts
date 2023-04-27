import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: "root",
})
export class RatingListService {
  displayedColumns: string[] = [
    "rating",
  ];
  formGroup: FormGroup;
  constructor(public _apiService: ApiService, public formBuilder: FormBuilder) {

  }

  deleteById(id): any {
    return this._apiService.delete(`promoCode/${id}/delete`);
  }


  getData(id:any): Promise<any> {
    return this._apiService.get(`laundry/${id}/ratings`);
  }
  

  addRatingList(data): Promise<any> {
    return this._apiService.post("rating/add", data);
  }

  
}