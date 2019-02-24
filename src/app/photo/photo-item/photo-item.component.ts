import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../model/model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {

  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
