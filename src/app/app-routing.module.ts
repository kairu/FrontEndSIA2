import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { CustomerSupportComponent } from './services/customer-support/customer-support.component';
import { DataStorageComponent } from './services/data-storage/data-storage.component';
import { DbManagementComponent } from './services/db-management/db-management.component';
import { NetSecurityComponent } from './services/net-security/net-security.component';
import { NetSetupComponent } from './services/net-setup/net-setup.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [{path: 'home', component: HomepageComponent},
                        {path: 'services', component: ServicesComponent},
                        {path: 'products', component: ProductsComponent},
                        {path: 'about', component: AboutComponent},
                        {path: 'team', component: TeamComponent},
                        {path: 'contact-us', component: ContactUsComponent},
                        {path: 'db-management', component: DbManagementComponent},
                        {path: 'net-security', component: NetSecurityComponent},
                        {path: 'data-storage', component: DataStorageComponent},
                        {path: 'customer-support', component: CustomerSupportComponent},
                        {path: 'net-setup', component: NetSetupComponent},
                        {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
