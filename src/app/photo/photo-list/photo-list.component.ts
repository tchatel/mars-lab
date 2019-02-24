import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../model/model';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(public result: ResultService) { }

  ngOnInit() {
  }

}
