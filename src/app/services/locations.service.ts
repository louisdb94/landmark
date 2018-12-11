import { Injectable } from '@angular/core';
import { Marker } from '../../../server/models/marker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {

  private header = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8'});

  position: any;

  markers: Marker[] = [
    {
      lat: 46.678418,
      lng: -89.809007,
      title: 'B',
      draggable: 0,
      detail: 'InfoWindow content',
      user: "John"
    },
    {
      lat: 90.678418,
      lng: -89.809007,
      title: 'B',
      draggable: 0,
      detail: 'InfoWindow content',
      user: "John"
    },
  ];

  constructor( private http: HttpClient) { }

  getMarkers() {
    return this.markers;
  }

  getAllMarkers(): Observable<any> {
    return this.http.get('/api/markers-getall', {headers: this.header});
  }

  addMarker(lat, lng, title, draggable, detail, user){
    this.markers.push({lat: lat, lng: lng, title: title, draggable: draggable, detail: detail, user: user});
  }

  addMarkers(marker): Observable<any> {
    return this.http.post(`/api/markers-insert`, JSON.stringify(marker.value), {headers: this.header});
}



}
