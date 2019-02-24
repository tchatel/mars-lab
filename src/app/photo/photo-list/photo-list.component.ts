import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../model/model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  @Input() photoList: Photo[];

  constructor() { }

  ngOnInit() {
  }

}
