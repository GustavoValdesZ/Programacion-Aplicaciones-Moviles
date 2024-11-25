import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoheaderComponent } from './logoheader/logoheader.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent, 
    LogoheaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule
  ],
  // Agrega ApiService a los providers
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService  // Aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
