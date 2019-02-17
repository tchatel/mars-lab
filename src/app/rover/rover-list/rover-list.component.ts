import { Component, OnInit } from '@angular/core';
import {RoverApiService} from '../../core/services/rover-api.service';
import {Rover} from '../../model/model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rover-list',
  templateUrl: './rover-list.component.html',
  styleUrls: ['./rover-list.component.css']
})
export class RoverListComponent implements OnInit {

  roverList$: Observable<Rover[]>;
  selectedRover: Rover;

  constructor(private roverApi: RoverApiService) { }

  ngOnInit() {
    this.roverList$ = this.roverApi.list();
  }

}
