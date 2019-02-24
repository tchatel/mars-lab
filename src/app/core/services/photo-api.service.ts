import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../../model/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {

  constructor(private http: HttpClient) {
  }

  search(roverName: string, cameraName?: string, sol?: number): Observable<Photo[]> {
    const path = `http://localhost:3390/rovers/${roverName}/photos`;
    const queryString = [
      {name: 'camera', value: cameraName},
      {name: 'sol', value: sol}
    ].filter(param => param.value)
      .map(param => `${param.name}=${param.value}`)
      .join('&');
    const url = queryString ? `${path}?${queryString}` : path;
    return this.http.get<Photo[]>(url);
  }

}
