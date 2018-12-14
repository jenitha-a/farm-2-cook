import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindusComponent } from './findus/findus.component';
import { Whyfarm2cookComponent } from './whyfarm2cook/whyfarm2cook.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { EggComponent } from './egg/egg.component';
import{ProductsComponent} from './products/products.component';
import { SingleComponent } from './single/single.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ContentComponent } from './content/content.component';
import { LogoutComponent } from './logout/logout.component';
import { Content1Component } from './content1/content1.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';




const routes: Routes = [
  {path:'', component: ContentComponent},
  {path:'products', component: ProductsComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'findus', component: FindusComponent },
{ path: 'whyfarm2cook', component: Whyfarm2cookComponent },
{ path: 'chicken', component: ChickenComponent },
{ path: 'mutton', component: MuttonComponent },
{ path: 'egg', component: EggComponent },
{path: 'single', component : SingleComponent},
{path:'content', component:ContentComponent},
{path: 'productlist', component : ProductlistComponent},
{path: 'productdetails', component : ProductdetailsComponent},
{path: 'logout', component : LogoutComponent},
{path: 'content1', component : Content1Component}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }