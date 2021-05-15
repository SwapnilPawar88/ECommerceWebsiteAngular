import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppModuleRouting } from './app.router.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardItemsComponent } from './card-items/card-items.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    CardItemsComponent,
    CheckoutPageComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
