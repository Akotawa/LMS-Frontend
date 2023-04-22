import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { CreateFormService } from '../../shared/services/create-form.service';
import { UtilityService } from '../../shared/services/utility.service';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  formGroup: FormGroup;
  registerCustomerForm: FormGroup;
  elementId:any
  passwordForm: FormGroup;
  notificationsForm: FormGroup;
  user: User = new User();

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  statefilteredOptions: Observable<string[]>;
  cityfilteredOptions: Observable<string[]>;
  loading: boolean;
  sessionUser:any
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private _userService: UserService,
    private _createFormService: CreateFormService,
    public _utilityService: UtilityService,
    private route: ActivatedRoute,
    private _loginService:LoginService,


  ) {
    this.formGroup = this._createFormService.createUserForm(this.user);
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.elementId = params['id'];
      console.log(this.elementId);
    });
  
    if (this.elementId) {
      this._userService.getUserById(this.elementId).then((response: any) => {
        if (response) {
          this.user = new User(response.data);
          this.formGroup = this._createFormService.createUserForm(this.user);
        } else {
          this.formGroup = this._createFormService.createUserForm(this.user);
        }
      }, error => {
        console.log(error);
      });
    } else {
      this.formGroup = this._createFormService.createUserForm(this.user);
    }
  }
  




  showSnackbar(): void {
    this.snackBar.open('Settings Updated', '', {
      duration: 3000,
    });
  }

  update() {
    const data = this.formGroup.getRawValue();
    let apiData={
      "email": data.email,
      "fullName": data.fullName,
      "homeAddress": data.fullName,
      "mobileNumber": data.mobileNumber,
      "password": data.password,
      "profileImage": "null"
    }
    const id = this.formGroup.get('id').value;
     data.id = this.sessionUser.id;
    console.log('cutomerid value', id);
    this.loading = true;
    this._userService.addOrSaveUser(this.sessionUser.id,apiData).then((response: any) => {
      this.loading = false;
      this.formGroup.reset()
      if (response && response.status === 'OK') {
        this._utilityService.openMatSnackBar(response.message, response.status);
        this._loginService.logout()

      } else {
        this._utilityService.openMatSnackBar(response.message, response.status);
      }
    }, error => {
      this.loading = false;
      this._utilityService.openMatSnackBar(error.error.message, 'ERROR');
    });
  }
}
