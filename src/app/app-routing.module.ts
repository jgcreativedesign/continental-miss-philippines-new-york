import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path:'',
    component: RootComponent,
    children:[
      { path:'', component: HomeComponent },
      { path:'gallery', component: GalleryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
