import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GLOBAL_CONSTANTS } from '../constants/global.constant';
import { userLoginModel } from '../models/clsses/user.model';
import { Observable } from 'rxjs';
import { API_Response } from '../models/interface/common.model';

@Injectable({
    providedIn: 'root'
})
export class userService {

    http = inject(HttpClient);
    apiUrl = environment.API_URL;

    getLoginUser(obj : userLoginModel): Observable<API_Response> {
        return this.http.post<API_Response>(this.apiUrl + GLOBAL_CONSTANTS.API_METHODS.LOGIN, obj)
      
    }
}
