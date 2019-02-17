import { Component, OnInit } from '@angular/core';
import {Rover} from '../../model/model';

@Component({
  selector: 'app-rover-page',
  templateUrl: './rover-page.component.html',
  styleUrls: ['./rover-page.component.css']
})
export class RoverPageComponent implements OnInit {

  selectedRover: Rover;

  constructor() { }

  ngOnInit() {
  }

}
