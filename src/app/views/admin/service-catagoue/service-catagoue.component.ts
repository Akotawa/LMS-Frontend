import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

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
    private routes : ActivatedRoute
    ) { }

  ngOnInit() {
    this.sessionUser = JSON.parse(localStorage.getItem("user"));
    this.getAllList('id')
    this.routeSub = this.routes.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.getAllList(params['id']);
    });

    // this.routeSub = this.routes.params.subscribe(params => {
    //   const id = parseInt(params['id'], 10);
    //   if (!isNaN(id)) {
    //     console.log(id); //log the parsed id value
    //     this.getAllList(id);
    //   } else {
    //     console.error('Invalid ID value:', params['id']);
    //   }
    // });
    
  }


  getAllList(id: any) {
    this.isLoading=true
    this._adminService.serviceList(this.sessionUser.laundryid).then((resData: any) => {
      this.data = resData.data;
      this.isLoading=false

    //   const keys = Object.keys(this.data); // get the keys of the data object
    //   for (let i = 0; i < keys.length; i++) {
    //     const key = keys[i];
    //     const value = this.data[key]; // access the value of the current key
    //     console.log(`${key}: ${value}`); // log the key-value pair to the console
    //   }
    // });
  })}
  
  
  
  
  

}
