import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Car } from '../models/car';

interface ParkingState {
  cars: Car[];
  error: string;
  loading: boolean;
}

@Injectable()
export class StoreService extends ComponentStore<ParkingState> {

  constructor() { 
    super({
      cars: [],
      error: '',
      loading: false
    })
  }

}