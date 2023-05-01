import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';
import { MatDialog } from '@angular/material';
import { UtilityService } from '../../../shared/services/utility.service';
import { CustomerPasswordChangeComponent } from '../../../views/customer/customer-password-change/customer-password-change.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'portal-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  user: any;
  dialogRef: any;
  constructor(
    public _loginService: LoginService,
    private _matDialog: MatDialog,
    public _utilityService: UtilityService,
    private _route : Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  
  changePassword(): void {
    this.dialogRef = this._matDialog.open(CustomerPasswordChangeComponent, {
      width: '600px'
    });
    this.dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        return;
      }
    });
  }


  edit(element: any): void {
    this._route.navigateByUrl('/pages/edit-profile/' + this.user.id);
  }
}


