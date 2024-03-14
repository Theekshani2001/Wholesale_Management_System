import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthContextComponent} from "./Components/auth-context/auth-context.component";
import * as path from "path";
import {LoginPageComponent} from "./Components/auth-context/inner-items/login-page/login-page.component";
import {SignUpComponent} from "./Components/auth-context/inner-items/sign-up/sign-up.component";
import {InnerDashBoardComponent} from "./Components/inner-dash-board/inner-dash-board.component";
import {CustomerContextComponent} from "./Components/inner-dash-board/components/customer-context/customer-context.component";

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'auth',component:AuthContextComponent,children:[

      {path:'login',component:LoginPageComponent},
      {path:'signup',component:SignUpComponent}
    ]},
  {path:'innerDashBoard',component:InnerDashBoardComponent, children:[
      {path: '',redirectTo: '/innerDashBoard/customer-management',pathMatch:'full'},
      {path: 'customer-management',component: CustomerContextComponent}


    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
