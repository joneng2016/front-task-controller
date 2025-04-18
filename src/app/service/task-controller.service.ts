import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskControllerService {

  constructor() { }

  start() {
    console.log('Task started');
  }
}
