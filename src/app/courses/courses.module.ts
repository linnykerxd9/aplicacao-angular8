import { AppPipeModule } from './../shared/pipes/app-pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './courses-list.component';
import { CourseInfoComponent } from './course-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseInfoComponent,
    CourseListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CoursesModule{

}
