import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from "@ionic-native/geolocation/ngx";


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {




  lat = -33.2919043;
  lng = -66.3287783;
  zoom = 14;
  height = 0;

  constructor(public platform: Platform, private geolocation: Geolocation) {
    console.log(platform.height());
    this.height = platform.height() - 56;

    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude
      this.lng = data.coords.longitude
    });
  }



  ngOnInit() { }

}
