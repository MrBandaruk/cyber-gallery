import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Overlay} from '@angular/cdk/overlay';
import {Observable} from 'rxjs/internal/Observable';
import {UploadDialogComponent} from '../components/upload-dialog/upload-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,
              private overlay: Overlay) { }

  upload(): Observable<string> {
    const dialog = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      autoFocus: false
    });

    return dialog.afterClosed();
  }
}
