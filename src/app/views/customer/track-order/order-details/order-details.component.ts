import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { laundryDetailsComponent } from '../../../super-admin/manage-laundry/details/details.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) private _data: any,
  public matDialogRef: MatDialogRef<laundryDetailsComponent>,
  public _utilityService: UtilityService,
  private dialog: MatDialog,) { }

  ngOnInit() {
  }

}
