import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  form: FormGroup;
  imgUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UploadDialogComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      imgUrl: [this.imgUrl, Validators.required]
    });
  }

  submit(form) {
    this.dialogRef.close(form.value.imgUrl);
  }
}
