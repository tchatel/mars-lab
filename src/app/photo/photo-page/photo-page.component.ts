import { Component, OnInit } from '@angular/core';
import {SearchData} from '../photo-search-form/photo-search-form.component';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSearch(searchData: SearchData) {
    console.log(searchData);
  }
}
