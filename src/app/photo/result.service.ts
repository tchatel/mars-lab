import { Injectable } from '@angular/core';
import {Photo} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  list: Photo[];

}
