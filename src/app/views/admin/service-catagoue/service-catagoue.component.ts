import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { UtilityService } from '../../../shared/services/utility.service';

@Component({
  selector: 'app-service-catagoue',
  templateUrl: './service-catagoue.component.html',
  styleUrls: ['./service-catagoue.component.scss']
})
export class ServiceCatagoueComponent implements OnInit {
data:any
routeSub:any
  sessionUser: any;
  leagueCodeAndName: any;
  datalist: any;
  isLoading=false;

  constructor(    private _adminService: AdminService,
    private routes : ActivatedRoute,
    private _utilityService : UtilityService,
    ) { }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.getAllList('id')
  }


  getAllList(id: any) {
    this.isLoading=true
    this._adminService.serviceList(this.sessionUser.laundryid).then((resData: any) => {
      this.data = resData.data;
      this.isLoading=false

  })}
  
  
  
  
  

}
