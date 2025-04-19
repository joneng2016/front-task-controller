import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })

export class TaskControllerService {

  private apiHost = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {}

  search() {
    return this.http.get(`${this.apiHost}/task`);
  }
}
