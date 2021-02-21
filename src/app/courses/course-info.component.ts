import { CourseService } from './courses.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './courses';
@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course: Course;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ActivatedRoute: ActivatedRoute , private CourseService: CourseService) { }

  ngOnInit(): void {
    this.CourseService.retrieveById(+this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log(err)
   });
  }
  save(): void{
    this.CourseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('error', err)
    });
  }
 }
