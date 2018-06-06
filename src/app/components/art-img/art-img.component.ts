import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-art-img',
  templateUrl: './art-img.component.html',
  styleUrls: ['./art-img.component.scss']
})
export class ArtImgComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
