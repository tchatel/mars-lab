import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../../model/model';
import {switchMap} from 'rxjs/operators';
import {PhotoApiService} from '../../core/services/photo-api.service';

@Component({
  selector: 'app-big-photo',
  templateUrl: './big-photo.component.html',
  styleUrls: ['./big-photo.component.css']
})
export class BigPhotoComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
              private photoApi: PhotoApiService) { }

  ngOnInit() {
    this.photo$ = this.route.paramMap
      .pipe(
        switchMap(paramMap => this.photoApi.get(paramMap.get('id')))
      );
  }

}
