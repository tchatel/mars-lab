import {Component, Input, OnInit} from '@angular/core';
import {Rover} from '../../model/model';

@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.css']
})
export class RoverDetailsComponent implements OnInit {

  @Input() rover: Rover;

  constructor() { }

  ngOnInit() {
  }

}
