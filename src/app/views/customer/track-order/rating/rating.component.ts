import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { AddRatingComponent } from '../../../rating/add-rating/add-rating.component';
import { RatingListService } from '../../../rating/rating-list.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  RatingData: FormGroup;
  sessionUser:any
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<AddRatingComponent>,
    public _utilityService : UtilityService,
    public _ratingListService : RatingListService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,

  ) {

    const formOptions = {
      'custumerId': '',
      'orderId': '',
      'rating': ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    };
    this.RatingData = this.formBuilder.group(formOptions, {
    });
  }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  sumit() {
    const data = this.RatingData.getRawValue();
    const custumerId = this.RatingData.get('custumerId').value; // get the laundryId value
    data.custumerId = this.sessionUser.id;
    data.orderId = this._data;

    this._ratingListService.addRatingList(data)
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
// rating error  print
  get rating() {
    return this.RatingData.get('rating');
  }

  onSubmit() {
    if (this.RatingData.valid) {
      console.log('Rating submitted:', this.rating.value);
    } else {
      this.rating.setErrors({ invalid: true });
    }
  }

}
