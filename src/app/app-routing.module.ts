import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailReadEstateComponent } from './component/detail-read-estate/detail-read-estate.component';
import { FovouriteComponent } from './component/fovourite/fovourite.component';
import { ListRealEstateComponent } from './component/list-real-estate/list-real-estate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: ListRealEstateComponent
      },
      {
        path: 'detail/:id',
        component: DetailReadEstateComponent
      }
    ]
  },
  {
    path: 'favourite',
    component: FovouriteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
