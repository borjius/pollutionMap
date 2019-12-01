import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pollutionMap';
  lat : number;
  lng : number;
  zoom : number;

  ngOnInit() {
  setTimeout(()=> {
   // Put the logic here
   this.drawCircles();

   }, 1000);


    }

// First, create an object containing LatLng and population for each city.
        places = {
          villanueva: {
            center: {lat: 40.4517812, lng: -3.9909685},
            mortgage: 261
          },
          panizo: {
            center: {lat: 40.4612725, lng: -3.7075296},
            mortgage: 425
          },
          peñascales: {
            center: {lat: 40.4237097, lng: -3.6661805},
            mortgage: 600
          },
          hortaleza: {
            center: {lat: 40.4693066, lng: -3.6483362},
            mortgage: 334
          }
        };


      // Get Current Location Coordinates
      private drawCircles() {


       var map = new google.maps.Map(document.getElementById('myMap'), {
           zoom: 10,
           center: {lat: 40.403089, lng: -3.891159},
           mapTypeId: 'terrain'
         });

         // Construct the circle for each value in places.
         // Note: We scale the area of the circle based on the mortgage.
         for (var place in this.places) {
           // Add the circle for this city to the map.
           var placeCircle = new google.maps.Circle({
             strokeColor: '#FF0000',
             strokeOpacity: 0.8,
             strokeWeight: 2,
             fillColor: '#FF0000',
             fillOpacity: 0.35,
             map: map,
             center: this.places[place].center,
             radius: Math.sqrt(this.places[place].mortgage) * 100
           });
      }
}

  // Get Current Location Coordinates
      private setCurrentLocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.zoom = 15;
          });
        }
      }


}
