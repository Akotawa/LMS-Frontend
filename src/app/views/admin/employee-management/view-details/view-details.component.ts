import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { laundryDetailsComponent } from '../../../super-admin/manage-laundry/details/details.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<laundryDetailsComponent>,
    public _utilityService: UtilityService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    
  }

}
