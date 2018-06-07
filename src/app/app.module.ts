import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArtImgComponent } from './components/art-img/art-img.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import {DialogService} from './services/dialog.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    ArtImgComponent,
    UploadDialogComponent
  ],
  entryComponents: [
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
