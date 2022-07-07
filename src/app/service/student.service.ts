import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API = 'http://localhost:8081/api/students';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  save(student: Student): Observable<any> {
    return this.httpClient.post(this.API, student);
  }

  findById(id: String): Observable<any> {
    return this.httpClient.get(this.API+`/${id}`);
  }
  findByScore(from: string, to: string): Observable<any> {
    return this.httpClient.get(this.API+`/score-between?from=${from}&to=${to}`);
  }

  update(student: Student, id: string): Observable<any> {
    return this.httpClient.put(this.API+`/${id}`, student);
  }


}
