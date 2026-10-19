import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IUser } from '../../../core/models/interface/common.model';
import { GLOBAL_CONSTANTS } from '../../../core/constants/global.constant';

@Component({
  imports: [RouterOutlet],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  loggedInUser! : IUser;
  router = inject(Router)

  constructor() {
    const localData = localStorage.getItem(GLOBAL_CONSTANTS.LOCAL_STORAGE_KEYS);
    if(localData !== null){
      this.loggedInUser = JSON.parse(localData);
    }

  }

  onLogout(){
    localStorage.removeItem(GLOBAL_CONSTANTS.LOCAL_STORAGE_KEYS);
       this.router.navigate(['/login']);
  }
}
