import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rover} from '../../model/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoverApiService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Rover[]> {
    const url = 'http://localhost:3390/rovers';
    return this.http.get<Rover[]>(url);
  }

}
