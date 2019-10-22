import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Home2Component } from './components/home2/home2.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { AboutComponent } from './components/about/about.component';

import { AgmCoreModule } from "@agm/core";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [
    AppComponent,
    Home2Component,
    HomeComponent,
    CategoriasComponent,
    MapaComponent,
    AboutComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_Hn7NNKWvrWrQX_mGktWxiDbacHuOeIM'
    })],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
