import { Component, OnInit } from '@angular/core';
import {RoverApiService} from '../../core/services/rover-api.service';

@Component({
  selector: 'app-rover-list',
  templateUrl: './rover-list.component.html',
  styleUrls: ['./rover-list.component.css']
})
export class RoverListComponent implements OnInit {

  constructor(roverApi: RoverApiService) { }

  ngOnInit() {
  }

}
