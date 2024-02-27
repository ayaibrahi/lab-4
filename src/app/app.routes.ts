import { Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { AboutComponent } from './../components/about/about.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './../components/product-details/product-details.component';
import { NotFoundComponent } from './../components/not-found/not-found.component';
import { ProductsparentComponent } from './../components/productsparent/productsparent.component';
import { WishListComponent } from './../components/wish-list/wish-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsparentComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'wish', component: WishListComponent },
  //  wild card route
  { path: '**', component: NotFoundComponent },
];
