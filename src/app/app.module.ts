import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoheaderComponent } from './logoheader/logoheader.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


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
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, SQLiteObject],
  bootstrap: [AppComponent],
})
export class AppModule {}
