import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { FindusComponent } from './findus/findus.component';
import { Whyfarm2cookComponent } from './whyfarm2cook/whyfarm2cook.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { EggComponent } from './egg/egg.component';
import { SingleComponent } from './single/single.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ContentComponent } from './content/content.component';
import { fakeBackendProvider } from './_helpers';


import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { LogoutComponent } from './logout/logout.component';
import { Content1Component } from './content1/content1.component';
import { TopHeader1Component } from './top-header1/top-header1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TopHeaderComponent,
    BottomFooterComponent,
    ProductsComponent,   
    RegisterComponent,
    FindusComponent,
    Whyfarm2cookComponent,
    ChickenComponent,
    MuttonComponent,
    EggComponent,
    SingleComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    ContentComponent,
    AlertComponent,
    LogoutComponent,
    Content1Component,
    TopHeader1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
        HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
