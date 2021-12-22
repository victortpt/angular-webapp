import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductEditComponent } from './components/product-edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: '**', component: ErrorComponent}

];

export const appRoutingProviders: any[] = [];
export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
