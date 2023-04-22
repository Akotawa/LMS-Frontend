import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { SuperAdminComponent } from '../super-admin.component';
import { SuperAdminService } from '../super-admin.service';
import { RegisterLaundry } from './register-laundry.model';

@Component({
  selector: 'app-register-laundry',
  templateUrl: './register-laundry.component.html',
  styleUrls: ['./register-laundry.component.scss']
})
export class RegisterLaundryComponent implements OnInit {
  registerLaundryForm!: FormGroup;
  registerLaundry: RegisterLaundry = new RegisterLaundry();
  isLoading=false;
  elementId: any;
  constructor( 
    private formBuilder: FormBuilder,
    private _superadminservice: SuperAdminService,
    private _utilityService:UtilityService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.registerLaundryForm = this._superadminservice.createRegisterForm(this.registerLaundry)
    }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.elementId = params['id'];
      if(this.elementId){
        this._superadminservice.getlaundryDetails(this.elementId).then((response:any)=>{
          if(response){
           this.registerLaundry = new RegisterLaundry(response.data)
           this.registerLaundryForm = this._superadminservice.createRegisterForm(this.registerLaundry)

          }else{
           this.registerLaundryForm = this._superadminservice.createRegisterForm(this.registerLaundry)
          }
       })
      }
    });
  }



sumit(){
  this.isLoading=true;
  const data = this.registerLaundryForm.getRawValue();
  this._superadminservice.laundryAdd(data,this.elementId).then((response: any) => {
    this.registerLaundryForm.reset()
    if (response && response.status == "OK") {
      this._utilityService.openMatSnackBar(
        response.message,
        response.status
      );
      this.isLoading=false;

    } else {
      this._utilityService.openMatSnackBar(
        response.message,
        response.status
      );
    }
  },
  (error) => {
    this._utilityService.openMatSnackBar("Internal Server error", "ERROR");
  }
);
}
}
