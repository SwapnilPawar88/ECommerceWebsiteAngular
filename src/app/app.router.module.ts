import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";  
import { CardItemsComponent } from './card-items/card-items.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';



const routes: Routes = [
    {path: '', redirectTo: '/ProductList', pathMatch:'full' },
    {path: 'ProductList', component: ProductListComponent},
    {path: 'cardProducts', component: CardItemsComponent},
    {path: 'DetailProduct/:Id', component: ProductDetailComponent}, 
    {path: 'checkOutPage', component: CheckoutPageComponent},  
    {path: 'thankPage', component: ThankYouPageComponent },
    {path: '**', component: PageNotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppModuleRouting{

}

// export const componentList = [ProductListComponent,ProductDetailComponent];