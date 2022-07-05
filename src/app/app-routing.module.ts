import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home/home.component";
import {ListProductComponent} from "./home/list-product/list-product.component";
import {CreateProductComponent} from "./home/create-product/create-product.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'list-product',
        component: ListProductComponent
      },
      {
        path: 'create-product',
        component: CreateProductComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
