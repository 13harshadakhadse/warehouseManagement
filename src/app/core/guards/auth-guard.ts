import { CanActivateFn, Router } from '@angular/router';
import { GLOBAL_CONSTANTS } from '../constants/global.constant';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const logInDetailData = localStorage.getItem(GLOBAL_CONSTANTS.LOCAL_STORAGE_KEYS);

  if(logInDetailData != null){
    return true;
  }else{
    router.navigateByUrl('/login')
    return false
  }


};
