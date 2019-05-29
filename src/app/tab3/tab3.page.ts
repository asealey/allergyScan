import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  scannedData = {};
  isSafe = "DEFAULT";
  barcodeScannerOptions: BarcodeScannerOptions;
  okCodes = ['0064144282432','000000']

  constructor(private barcodeScanner: BarcodeScanner) {}

  lookupCode(code){
    if(this.okCodes.includes(code)){
      return "Safe";
    } else {
      return "Unsafe!";
    }
  }

  scanBarcode(){
    // alert("Foo")
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        // alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        this.isSafe = this.lookupCode(barcodeData["text"]);
        // this.isSafe = this.okCodes.includes(barcodeData["text"]);
      }).catch(err => {
        // console.log('Error', err);
      })
  }


  // constructor(private camera: Camera) { }

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.currentImage = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //    console.log("Camera issue:" + err);
  //   });
  // }
}
