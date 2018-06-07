import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  // http parameters (headers and etc.)
  httpParams: any = {};

  getImage(): Observable<any> {
    return this.http.get('https://yourURL.com/', this.httpParams);
  }

  postImage(img: any): Observable<any> {
    return this.http.post('https://yourURL.com/', img, this.httpParams);
  }
}
