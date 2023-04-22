import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UtilityService } from './utility.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService implements Resolve<any>{

    onUserChanged: BehaviorSubject<any>;
    onUsersChanged: BehaviorSubject<any>;
    user: any;
    users: any;
    routeParams: any;
    state: string;
  this: any;

    constructor(
        private _httpClient: HttpClient,
        public _utilityService: UtilityService,
        private _apiService: ApiService
    ) {
        // Set the defaults
        this.onUserChanged = new BehaviorSubject({});
        this.onUsersChanged = new BehaviorSubject([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;
        this.state = state.url;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getUserForResolve()
            ]).then(
                () => {
                    
                },
                reject
            );
        });
    }

    getUserForResolve(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.state.includes('add')) {
                this.user = undefined;
                this.onUserChanged.next(false);
                resolve(false);
            }
            else {
                this.getUserById(this.routeParams.id).then((response: any) => {
                    this.user = response.data;
                    this.onUserChanged.next(this.user);
                    resolve(response);
                }, reject);
            }
        });
    }

    addAdminOrSave(data: any, type: any) {
        return this._apiService.post(data, type === 'add' ? 'user/addAdmin' : 'user/updateUser');
    }
    

    // addOrSaveUser(data: any,) {
    //     return this._apiService.put('customer/update/${id}',data);
    // }


    addOrSaveUser(id: any, data): Promise<any> {
    
          return this._apiService.put(`customer/update/${id}`, data);
      
      }



    getUserList() {
        return this._apiService.get('user/getAllUser');
    }
    getUserListWithPagination(json) {
        return this._apiService.post(json, 'user/getUserListWithPagination');
    }
    getUserListWithFilterAndPagination(json) {
        return this._apiService.post(json, 'user/getUserListByFilterWithPagination');
    }
    getPlayerListWithFilterAndPagination(json) {
        return this._apiService.post(json, 'user/getPlayerListByFilterWithPagination');
    }
    getUserById(id) {
        return this._apiService.get(`get/customer/${id}`);
    }
    deleteUserById(id) {
        return this._apiService.get(`user/deleteUser/${id}`);
    }
    changeUserStatus(status: any, id: any) {
        return this._apiService.post(null, `user/changeUserStatus/${status}/${id}`);
    }
    forgotPassword(email: any) {
        return this._apiService.get(`user/forgotPassword/${email}`);
    }

    getUserDetailsById(id: any) {
        return this._apiService.get(`user/getUserDetailsById/${id}`);
    }

    getData() {
        return this._apiService.get(`dashboard/getResults`);
    }
}
