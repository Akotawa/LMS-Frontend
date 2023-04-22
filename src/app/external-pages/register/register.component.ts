import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';
import { AdminService } from '../../views/admin/admin.service';
import { registerCustumer } from './register-custumer-model';

@Component({
  selector: 'portal-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerCustomerForm: FormGroup;
  elementId:any
  // registerCustumer: registerCustumer = new registerCustumer();

  constructor(
    private formBuilder: FormBuilder,
    private _adminService: AdminService,
    public _utilityService: UtilityService,
    private route: ActivatedRoute,

    private router: Router
  ) {
    const emailRegex =
      "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";
    const formOptions = {
      email: ["", Validators.required],
      fullName: ["", Validators.required],
      homeAddress: ["", Validators.required],
      profileImage: ["nu", Validators.required],
      mobileNumber: ["", [Validators.required, Validators.pattern(emailRegex)]],
      password: ["", Validators.required],
    };

    this.registerCustomerForm = this.formBuilder.group(formOptions, {
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.elementId = params['id'];
    //   console.log(this.elementId);
    // });

    // this._adminService.getInventoryDetails(this.elementId).then((response:any)=>{
    //    if(response){
    //     this.registerCustumer = new registerCustumer(response.data)
    //     this.registerCustomerForm = this._adminService.createCustumerForm(this.registerCustumer)
    //    }else{
    //     this.registerCustomerForm = this._adminService.createCustumerForm(this.registerCustumer)
    //    }
    // })


  }


  submit() {
    const data = this.registerCustomerForm.getRawValue();
    this._adminService.customerAdd(data).then(
      (response: any) => {
        this.registerCustomerForm.reset()
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

  login(): void {
    this.router.navigate(['/external/login']);
  }

}


