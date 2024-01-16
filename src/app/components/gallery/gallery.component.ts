import { Component } from '@angular/core';
import * as json from '../../../assets/img/Jasmine/jasmine-images.json';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  jasmineImages=json;

  constructor(
    private _dialog: MatDialog
  ){}

  openDialog(imageUrl: string){
    this._dialog.open(ImageDialogComponent, {
      data: imageUrl
    })
  }
}
