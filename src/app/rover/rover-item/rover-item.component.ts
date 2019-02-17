import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rover} from '../../model/model';

@Component({
  selector: 'app-rover-item',
  templateUrl: './rover-item.component.html',
  styleUrls: ['./rover-item.component.css']
})
export class RoverItemComponent implements OnInit {

  @Input() rover: Rover;
  @Input() selected: boolean;
  @Output() select = new EventEmitter<Rover>();

  constructor() { }

  ngOnInit() {
  }

  isRoverDead(): boolean {
    return this.rover.status !== 'active';
  }

}
