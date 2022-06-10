import { RealEstateService } from './service/real-estate.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListRealEstateComponent } from './component/list-real-estate/list-real-estate.component';
import { ItemReadEstateComponent } from './component/item-read-estate/item-read-estate.component';
import { DetailReadEstateComponent } from './component/detail-read-estate/detail-read-estate.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FovouriteComponent } from './component/fovourite/fovourite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListRealEstateComponent,
    ItemReadEstateComponent,
    DetailReadEstateComponent,
    FooterComponent,
    FovouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [RealEstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
