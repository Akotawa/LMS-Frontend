import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.scss']
})
export class ServiceAddComponent implements OnInit {

  registerorderForm: FormGroup;
  file: any;
  isSubmitButtonDisable: any;
  leagueId: any;
  sessionUser:any
  services=[]
  imageURL: string;
  constructor( private formBuilder: FormBuilder,
    private _adminService: AdminService,
    private _utilityService:UtilityService,


    private router: Router) { 
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      const formOptions = {

        'laundryId': ['', Validators.required],
        'price': ['', Validators.required],
        'quantity': ['', Validators.required],
        'serviceDescription': ['', [Validators.required, Validators.pattern(emailRegex)]],
        'serviceName': ['', Validators.required],
        // 'fileName': ['', Validators.required],
      };
      
      this.registerorderForm = this.formBuilder.group(formOptions, {
        // validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
      });
    }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.getAllList()

  }
//   matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): any {
//     return (group: FormGroup) => {
//       const password = group.controls[passwordKey];
//       const confirmPassword = group.controls[confirmPasswordKey];

//       if (!password.value || !confirmPassword.value) {
//         return null;
//       }
//       if (password.value !== confirmPassword.value) {
//         return {
//           mismatchedPasswords: true
//         };
//       }
//       return null;
//     };

// }



submit(){
  const data = this.registerorderForm.getRawValue();
  const laundryId = this.registerorderForm.get('laundryId').value; // get the laundryId value
  data.laundryId = this.sessionUser.laundryid;
  console.log('laundryid value',laundryId);

  this._adminService.serviceAdd(data).then((response: any) => {
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










getAllList() {
  this._adminService.getPriceListByLaundryId(this.sessionUser.laundryid).then((resData: any) => {
    this.services = resData.data;
    console.log(resData);
})}


onSelectFile(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    this.registerorderForm.get('fileName').setValue(file);
  }
}

onSubmit() {
  const file = this.registerorderForm.get('fileName').value;
  const fileNameWithoutExtension = file.name.substring(0, file.name.lastIndexOf('.'));
  const formData = new FormData();
  formData.append('file', file);
  this._adminService.uploadImage(formData, fileNameWithoutExtension).then((response: any) => {
    this.file = response.data;
  });
  this.registerorderForm.reset();
  this.imageURL = null;
  
}


}
