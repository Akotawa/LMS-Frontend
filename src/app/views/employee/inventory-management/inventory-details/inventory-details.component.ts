import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UtilityService } from '../../../../shared/services/utility.service';
import { laundryDetailsComponent } from '../../../super-admin/manage-laundry/details/details.component';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.scss']
})
export class InventoryDetailsComponent implements OnInit {
  dataInfo: any;

  dataSource: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    public matDialogRef: MatDialogRef<InventoryDetailsComponent>,
    public _utilityService: UtilityService,
    private dialog: MatDialog,
  ) {
    this.dataInfo = _data;

  }

  ngOnInit() {}

}
