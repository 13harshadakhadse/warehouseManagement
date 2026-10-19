import { Component, inject } from '@angular/core';
import { userLoginModel } from '../../../core/models/clsses/user.model';
import { userService } from '../../../core/service/user';
import { FormsModule } from '@angular/forms';
import { API_Response } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.html',
})
export class Login {

  userService = inject(userService);
  router = inject(Router);
  loginObj : userLoginModel = new userLoginModel();

  onLogin(){

    this.userService.getLoginUser(this.loginObj).subscribe({
      next:(res : API_Response)=>{
        if(res?.result){
          localStorage.setItem('warehouseUser', JSON.stringify(res?.data));
          this.router.navigate(['admin/client-list']);
        }else{
          alert(res?.message)
        }
        
      },
      error:(err : HttpErrorResponse)=>{

      }
    })

  }
}
