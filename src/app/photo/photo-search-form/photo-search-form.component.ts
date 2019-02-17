import { Component, OnInit } from '@angular/core';
import {Camera, Rover} from '../../model/model';
import {Observable} from 'rxjs';
import {RoverApiService} from '../../core/services/rover-api.service';

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  formData: {rover?: Rover, camera?: Camera, sol?: number} = {};
  roverList$: Observable<Rover[]>;

  constructor(private roverApi: RoverApiService) { }

  ngOnInit() {
    this.roverList$ = this.roverApi.list();
  }

}
