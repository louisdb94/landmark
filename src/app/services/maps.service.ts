import { Injectable } from '@angular/core';
import * as Rx from "rxjs";

@Injectable()
export class MapsService {

  public newCoordinators = new Rx.Subject();
  public openWindow = new Rx.Subject();

  lat: number = 90;
  lng: number = -89;
  zoom: number = 10;


  constructor() { }

}
