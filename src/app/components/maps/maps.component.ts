import { Component, OnInit } from '@angular/core';
import {GMapModule} from 'primeng/gmap';
import { Marker } from '../../../../server/models/marker';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LocationService } from '../../services/locations.service';
import { UserService } from '../../services/user.service';
import { MapsService } from '../../services/maps.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FilterUser } from '../../pipes/filterUser';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: [FilterUser]
})

export class MapsComponent implements OnInit {

    marker: any;
    lat: number;
    lng: number;
    title: String =  "Current Position";
    draggable: number = 0;
    detail: String = "This is my current position";
    user: String = this.userService.currentUser.username;
    zoom: number;
    markers: Marker[] = this.locationService.getMarkers();
    // markers: Marker[] = this.locationService.getAllMarkers();

    openedWindow: number;

    filters = ['User', 'Details'];
    model = {
      filter: this.filters[0]
    };

    markerForm: FormGroup;


    public searchText: any;
    public searchUser: any;





    constructor(  private locationService: LocationService,
                  private mapApiLoader: MapsAPILoader,
                  private mapsService: MapsService,
                  private formBuilder: FormBuilder,
                  private userService: UserService) {}

    ngOnInit() {

      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = this.mapsService.lat = position.coords.latitude;
        this.lng  = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
        this.locationService.addMarker(this.lat, this.lng, "Current Position", 0, "This is my current position", this.user);
      });

      this.mapApiLoader.load();

      this.mapsService.openWindow.subscribe(
        index => {
          this.openedWindow = +index;
        }
      );

    }

    clickedMarker(label: string, index: number) {
      console.log(`Clicked the marker: ${label || index}`);
      this.openedWindow = index;
    }


    isInfoWindowOpen(index: number) {
      return this.openedWindow === index;
    }

    mapClicked($event: MouseEvent) {
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng;
    }

    setCurrentpos(){
      navigator.geolocation.getCurrentPosition((position) => {
        this.zoom = 10;
        this.markerForm = this.formBuilder.group({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: this.title,
          draggable: this.draggable,
          detail: this.detail,
          user: this.user
        });

        this.markers.push(this.markerForm.value)
      });

    }

    setMarkers(){
      this.locationService.getAllMarkers().subscribe(
        res => (this.markers = res),
        error => console.log(error)
      );

    }

    addMarker(){
      this.markerForm = this.formBuilder.group({
        lat: this.lat,
        lng: this.lng,
        title: this.title,
        draggable: this.draggable,
        detail: this.detail,
        user: this.user
      });
      this.locationService.addMarkers(this.markerForm).subscribe(
        res => {this.markers.push(this.markerForm.value)},
        error => console.log(error)
      );
    }



}
