import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../shared/services/utility.service';
import { RatingListService } from '../rating-list.service';


@Component({
  selector: 'app-add-price',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit {
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
      'laundryId': '',
      'userId': '',
      'rating': ['', Validators.required],
    };
    this.RatingData = this.formBuilder.group(formOptions, {
    });
  }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));

  }

  sumit() {
    const data = this.RatingData.getRawValue();
    const laundryId = this.RatingData.get('laundryId').value; // get the laundryId value
    data.laundryId = this.sessionUser.id;

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

}
