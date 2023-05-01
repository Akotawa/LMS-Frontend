import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { AdminService } from '../../../admin/admin.service';
import { CustomerService } from '../../../customer.service';

@Component({
  selector: 'app-assign-machine',
  templateUrl: './assign-machine.component.html',
  styleUrls: ['./assign-machine.component.css']
})
export class AssignMachineComponent implements OnInit {

  formGroup: FormGroup;
  sessionUser: any
  machineList: any[] = [];

  constructor(
    public matDialogRef: MatDialogRef<AssignMachineComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public _utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private _adminService: AdminService
  ) {
    this.formGroup = this.formBuilder.group({
      'laundryMachineAssignmentId': ['', Validators.required],
      'orderID': ''
    });
  }

  ngOnInit() {
    this._adminService.getActiveInventory().then((resData: any) => {
      this.machineList = resData.data;
    })
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
  }

  sumit() {
    const data = this.formGroup.getRawValue();
    data.orderID = this._data;
    this._adminService.laundryMachineAssing(data)
      .then((response: any) => {
        if (response && response.status == "OK") {
          this._utilityService.openMatSnackBar(
            response.message,
            response.status
          );
          this.matDialogRef.close(true);
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
