import { Component, OnInit } from '@angular/core';
import {SearchData} from '../photo-search-form/photo-search-form.component';
import {PhotoApiService} from '../../core/services/photo-api.service';
import {Observable} from 'rxjs';
import {Photo} from '../../model/model';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {

  photoList$: Observable<Photo[]>;

  constructor(private photoApi: PhotoApiService) { }

  ngOnInit() {
  }

  doSearch(searchData: SearchData) {
    this.photoList$ = this.photoApi.search(
      searchData.rover.name,
      searchData.camera && searchData.camera.name,
      searchData.sol
    );
  }
}
