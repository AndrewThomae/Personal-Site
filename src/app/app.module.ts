import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './toolbar/dropdown/dropdown.component';
import { SpaceComponent } from './space/space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RoutetestComponent } from './routetest/routetest.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const appRoutes: Routes = [
  { path: 'space', component: SpaceComponent},
  { path: 'route', component: RoutetestComponent},
  { path: '', component: BaseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SpaceComponent,
    ToolbarComponent,
    RoutetestComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
