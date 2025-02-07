import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { DisableRightClickService } from './shared/disableRightClick';
import { WatermarkDirective } from "./shared/watermark";
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ButtonModule } from 'primeng/button';
import { AuthenticationService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatermarkDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AccordionModule,
    DialogModule,
    AngularFireAuthModule,
    ButtonModule,
  ],
  providers: [DisableRightClickService, AuthenticationService, { provide: BUCKET, useValue: 'telegu-programmer.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
