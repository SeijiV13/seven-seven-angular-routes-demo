import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentChildOneComponent } from './component-child-one/component-child-one.component';
import { ComponentChildTwoComponent } from './component-child-two/component-child-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ActivateChGuard } from './guards/activate-ch.guard';
import { ActivateGuard } from './guards/activate.guard';
import { CanloadGuard } from './guards/canload.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { BookResolver } from './resolvers/book.resolver';

const routes: Routes = [
  {
    path:"",
    component: ComponentOneComponent
  },
  {
    path: "two",
    component: ComponentTwoComponent,
    canActivateChild: [ActivateChGuard],
    children: [
      {
        path: "child-one",
        component: ComponentChildOneComponent
      },
      {
        path: "child-two",
        component: ComponentChildTwoComponent
      }

    ]
  },
  {
    path: "three",
    // canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard],
    component: ComponentThreeComponent,
    resolve: {
      books: BookResolver
    }
  },
  {
    path: "four",
    canLoad: [CanloadGuard],
    loadChildren: () => import("./lazy/lazy.module").then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
