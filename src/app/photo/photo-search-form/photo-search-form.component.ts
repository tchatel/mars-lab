import { Component, OnInit } from '@angular/core';
import {Camera, Rover} from '../../model/model';

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  formData: {rover?: Rover, camera?: Camera, sol?: number} = {};

  constructor() { }

  ngOnInit() {
  }

}
