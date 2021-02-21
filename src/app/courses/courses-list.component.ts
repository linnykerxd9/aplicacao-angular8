import { Component, OnInit } from '@angular/core';
import { Course } from './courses';
import { CourseService } from './courses.services';
@Component({
  templateUrl: 'courses-list.component.html',
  styleUrls: ['courses.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];
  // tslint:disable-next-line:variable-name
  _courses: Course[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
    }
  retrieveAll(): void{
    this.coursesService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log(err)
    });
  }
  // tslint:disable-next-line:typedef
  deleteById(courseId: number): void {
    this.coursesService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    });
  }
  set filter(value: string) {
    this._filterBy = value;

    // tslint:disable-next-line:max-line-length
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }
}
