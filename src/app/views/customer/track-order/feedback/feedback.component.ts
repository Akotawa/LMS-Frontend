import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { CustomerService } from '../../../customer.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  FeedbackData: FormGroup;
  sessionUser:any
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<FeedbackComponent>,
    public _utilityService : UtilityService,
    public _custumerService : CustomerService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,

  ) {

    const formOptions = {
      'cutomerId': '',
      'orderId': '',
      'laundryId': '',
      'feedback': ['', Validators.required],
    };
    this.FeedbackData = this.formBuilder.group(formOptions, {
    });
  }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  sumit() {
    const data = this.FeedbackData.getRawValue();
    const laundryId = this.FeedbackData.get('laundryId').value; // get the laundryId value
    data.laundryId = this.sessionUser.id;
    data.orderId = this._data;
    data.cutomerId = this._data;

    
    this._custumerService.addFeedback(data)
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