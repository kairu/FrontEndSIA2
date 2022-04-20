import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DbManagementComponent } from './services/db-management/db-management.component';
import { NetSecurityComponent } from './services/net-security/net-security.component';
import { DataStorageComponent } from './services/data-storage/data-storage.component';
import { CustomerSupportComponent } from './services/customer-support/customer-support.component';
import { NetSetupComponent } from './services/net-setup/net-setup.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CartModalComponent } from './products/cart-modal/cart-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    ServicesComponent,
    ProductsComponent,
    AboutComponent,
    TeamComponent,
    ContactUsComponent,
    DbManagementComponent,
    NetSecurityComponent,
    DataStorageComponent,
    CustomerSupportComponent,
    NetSetupComponent,
    LoginComponent,
    RegisterComponent,
    CartModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
