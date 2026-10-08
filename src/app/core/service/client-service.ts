import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { API_Response } from '../models/interface/common.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANTS } from '../constants/global.constant';
import { ClientModel } from '../models/clsses/client.model';

@Service()

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    apiUrl = environment.API_URL;
    http = inject(HttpClient);

    getAllClients(): Observable<API_Response> {
        return this.http.get<API_Response>(this.apiUrl + GLOBAL_CONSTANTS.API_METHODS.GET_ALL_CLIENT);
    }

    saveClient( obj: ClientModel) {
        this.http.post(this.apiUrl + GLOBAL_CONSTANTS.API_METHODS.SAVE_CLIENT, {})

    }
}