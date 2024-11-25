import { Component } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  constructor() {}

  // Función para obtener la ubicación y mostrarla en el mapa
  async getLocationAndShowOnMap() {
    try {
      // Comprobamos el permiso de ubicación
      const permission: PermissionStatus = await Geolocation.requestPermissions();

      if (permission.location !== 'granted') {
        console.error('Permiso de ubicación no otorgado');
        return;
      }

      // Obtener la ubicación del dispositivo con alta precisión
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Obtener el iframe de mapa
      const mapFrame = document.getElementById('mapframe') as HTMLIFrameElement;
      if (mapFrame) {
        // Asignar la URL del iframe con la ubicación actual
        mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}`;
      }
    } catch (error) {
      console.error('Error al obtener la ubicación o mostrar el mapa:', error);
    }
  }
}
