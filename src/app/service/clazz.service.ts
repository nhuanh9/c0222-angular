import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClazzService {
  API = 'http://localhost:8081/api/classes';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }
}
