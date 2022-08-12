import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentChildOneComponent } from './component-child-one/component-child-one.component';
import { ComponentChildTwoComponent } from './component-child-two/component-child-two.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

function initializeAppFactory(http: HttpClient): () => Observable<any> {
  return () => http.get(`${environment.url}/blogs`).pipe(
    tap((data) => {}) 
  )
}

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentChildOneComponent,
    ComponentChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
