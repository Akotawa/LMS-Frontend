import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {
  ReferForm: FormGroup;
  sessionUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _customerService: CustomerService,
    public _utilityService: UtilityService,

  ) { 
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {
    this.ReferForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'id': ['', Validators.required]
    });
  }

  submit() {
    const email = this.ReferForm.get('email').value;
    const id = this.ReferForm.get('id').value;
    const data = this.ReferForm.getRawValue();
    data.id = this.sessionUser.laundryid;
    console.log(' value', id);
  
    this._customerService.refer(this.sessionUser.id, email, data).then((response: any) => {
      this.ReferForm.reset()
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
