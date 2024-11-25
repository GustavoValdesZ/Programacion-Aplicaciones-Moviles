import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';  

@Component({
  selector: 'app-camera',
  templateUrl: './camara.page.html', 
  styleUrls: ['./camara.page.scss'],  
})
export class CameraPage {  
  capturedImage: string | undefined;  // Variable para almacenar la imagen capturada

  constructor() {}

  // Función asincrónica para capturar la imagen
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,                // Calidad de la imagen
        resultType: CameraResultType.DataUrl,  // El tipo de resultado será una URL en base64
        source: CameraSource.Camera, // Usar la cámara del dispositivo
      });

      // Asignar la imagen capturada a la variable capturedImage
      this.capturedImage = image.dataUrl;
    } catch (error) {
      // Capturar cualquier error y mostrarlo en la consola
      console.error('Error al capturar la imagen:', error);
    }
  }
}
