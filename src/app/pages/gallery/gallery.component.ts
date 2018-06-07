import { Component, OnInit } from '@angular/core';
import {DialogService} from '../../services/dialog.service';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    'https://www.artistsnetwork.com/wp-content/uploads/2017/08/Creation-of-Adam_Michaelangelo_ArtistDaily.jpg',
    'https://10mosttoday.com/wp-content/uploads/2013/09/Starry_Night.jpg',
    'https://10mosttoday.com/wp-content/uploads/2013/09/The_Scream.jpg'
  ];

  constructor(private dialogService: DialogService,
              private imageService: ImageService) { }

  ngOnInit() {
  }

  upload(image: any) {
    this.imageService.postImage(image).subscribe(res => {
      // response
    }, err => {
      // error
    });
  }

  download() {
    this.imageService.getImage().subscribe(res => {
      // images (can be array)
    }, err => {
      // error
    })
  }

  openUploadDialog() {
    this.dialogService.upload().subscribe(res => {
      if (res) {
        console.log('image uploaded', res);
      }
    }, err => {
      console.log('error', err);
    })
  }

}
