import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Camera, Rover} from '../../model/model';
import {Observable} from 'rxjs';
import {RoverApiService} from '../../core/services/rover-api.service';

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<SearchData>();

  formData: SearchData = {};
  roverList$: Observable<Rover[]>;

  constructor(private roverApi: RoverApiService) { }

  ngOnInit() {
    this.roverList$ = this.roverApi.list();
  }

}

export interface SearchData {
  rover?: Rover;
  camera?: Camera;
  sol?: number;
}
