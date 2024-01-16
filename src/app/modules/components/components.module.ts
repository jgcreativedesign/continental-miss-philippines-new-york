import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { BasicNavComponent } from '../../components/basic-nav/basic-nav.component';
import { RouterModule } from '@angular/router';
import { RootComponent } from '../../components/root/root.component';
import { HomeSection1Component } from '../../components/home/home-section1/home-section1.component';
import { HomeSection2Component } from '../../components/home/home-section2/home-section2.component';
import { HomeSection3Component } from '../../components/home/home-section3/home-section3.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { ImageDialogComponent } from '../../components/gallery/image-dialog/image-dialog.component';
import { AboutComponent } from '../../components/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    BasicNavComponent,
    RootComponent,
    HomeSection1Component,
    HomeSection2Component,
    HomeSection3Component,
    GalleryComponent,
    FooterComponent,
    ImageDialogComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
