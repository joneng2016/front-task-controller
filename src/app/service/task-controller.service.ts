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

  search(page: number = 0): Observable<any> {
    return this.http.get(`${this.apiHost}/task?page=${page}`);
  }

  searchByElement(nameOfElement: string, valueOfElement: string): Observable<any> {
    console.log(`${this.apiHost}/task/find?${nameOfElement}=${valueOfElement}`);
    return this.http.get(`${this.apiHost}/task/find?${nameOfElement}=${valueOfElement}`);
  }
}
