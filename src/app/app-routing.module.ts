import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { RoutetestComponent } from './routetest/routetest.component';
import { SpaceComponent } from './space/space.component';

const routes: Routes = [
  { path: 'space', component: SpaceComponent},
  { path: 'route', component: RoutetestComponent},
  { path: '', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
