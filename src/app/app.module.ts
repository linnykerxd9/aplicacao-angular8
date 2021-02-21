import { CoursesModule } from './courses/courses.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Error404Component } from './core/components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursesModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
