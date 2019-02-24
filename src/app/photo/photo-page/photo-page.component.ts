import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchData} from '../photo-search-form/photo-search-form.component';
import {PhotoApiService} from '../../core/services/photo-api.service';
import {Observable, Subscription} from 'rxjs';
import {Photo} from '../../model/model';
import {ResultService} from '../result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css'],
  providers: [
    ResultService
  ]
})
export class PhotoPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private photoApi: PhotoApiService,
              private result: ResultService,
              private router: Router) { }

  ngOnInit() {
  }

  doSearch(searchData: SearchData) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.photoApi.search(
      searchData.rover.name,
      searchData.camera && searchData.camera.name,
      searchData.sol
    ).subscribe(photoList => {
      this.result.list = photoList;
      this.router.navigate(['/photo/list']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
