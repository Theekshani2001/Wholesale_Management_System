import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './Components/auth-context/auth-context.component';
import { LoginPageComponent } from './Components/auth-context/inner-items/login-page/login-page.component';
import { SignUpComponent } from './Components/auth-context/inner-items/sign-up/sign-up.component';
import { InnerDashBoardComponent } from './Components/inner-dash-board/inner-dash-board.component';
import { TopBarComponent } from './Components/inner-dash-board/items/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { CustomerContextComponent } from './Components/inner-dash-board/components/customer-context/customer-context.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SaveCustomerPageComponent } from './Components/inner-dash-board/components/customer-context/save-customer-page/save-customer-page.component';
import { UpdateCustomerPageComponent } from './Components/inner-dash-board/components/customer-context/update-customer-page/update-customer-page.component';
import { SearchCustomerPageComponent } from './Components/inner-dash-board/components/customer-context/search-customer-page/search-customer-page.component';
import { DeleteCustomerPageComponent } from './Components/inner-dash-board/components/customer-context/delete-customer-page/delete-customer-page.component';
import { AllCustomerPageComponent } from './Components/inner-dash-board/components/customer-context/all-customer-page/all-customer-page.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginPageComponent,
    SignUpComponent,
    InnerDashBoardComponent,
    TopBarComponent,
    CustomerContextComponent,
    SaveCustomerPageComponent,
    UpdateCustomerPageComponent,
    SearchCustomerPageComponent,
    DeleteCustomerPageComponent,
    AllCustomerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
