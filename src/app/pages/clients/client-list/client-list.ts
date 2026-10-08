import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ClientService } from '../../../core/service/client-service';
import { API_Response } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientModel } from '../../../core/models/clsses/client.model';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-client-list',
  styleUrl: './client-list.css',
  templateUrl: './client-list.html',
})
export class ClientList implements OnInit, OnDestroy {

  subScription!: Subscription;
  clientSrv = inject(ClientService);
  clientList: WritableSignal<ClientModel[]> = signal<ClientModel[]>([]);

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.subScription = this.clientSrv.getAllClients().subscribe({
      next: (res: API_Response) => {
        this.clientList.set(res.data);
      },
      error: (err: HttpErrorResponse) => {

      }
    })
  }

  ngOnDestroy(): void{
    this.subScription.unsubscribe();
  }
}
