import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../../admin/admin.service';
import { RegisterLaundry } from './register-inventry-model';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  registerorderForm: FormGroup;
  elementId:any
  registerLaundry: RegisterLaundry = new RegisterLaundry();

  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService:UtilityService,
    private route: ActivatedRoute,



    private router: Router)
    
    { 
      this.registerorderForm = this._adminService.createRegisterForm(this.registerLaundry)

      // const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      // const formOptions = {
      //   'userName': ['', Validators.required],
      //   'itemName': ['', Validators.required],
      //   'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
      //   'itemDescription': ['', Validators.required],
      //   'payment': ['', Validators.required],
      //   'quantity': ['', Validators.required],
      // };
      
      // this.registerorderForm = this.formBuilder.group(formOptions, {
      // });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.elementId = params['id'];
      console.log(this.elementId);
    });

    this._adminService.getInventoryDetails(this.elementId).then((response:any)=>{
       if(response){
        this.registerLaundry = new RegisterLaundry(response.data)
        this.registerorderForm = this._adminService.createRegisterForm(this.registerLaundry)
       }else{
        this.registerorderForm = this._adminService.createRegisterForm(this.registerLaundry)
       }
    })
  }

submit(){
  const data = this.registerorderForm.getRawValue();
  this._adminService.inventoryAdd(data,this.elementId).then((response: any) => {
    this.registerorderForm.reset()
    if (response && response.status == "OK") {
      this._utilityService.openMatSnackBar(
        response.message,
        response.status
      );
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
