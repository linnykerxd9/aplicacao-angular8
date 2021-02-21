import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService{


  // tslint:disable-next-line:no-inferrable-types
  private coursesUrl: string = 'http://localhost:3100/api/courses';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private HttpClient: HttpClient) { }

  retrieveAll(): Observable<Course[]> {
    return this.HttpClient.get<Course[]>(this.coursesUrl);
}
  retrieveById(id: number): Observable<Course>{
    return this.HttpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }
  save(course: Course): Observable<Course> {
    if (course.id) {
        return this.HttpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
    } else {
        return this.HttpClient.post<Course>(`${this.coursesUrl}`, course);
    }
  }
  deleteById(id: number): Observable<any>{
      return this.HttpClient.delete(`${this.coursesUrl}/${id}`);
  }
}
// Não precisa mais dele porque agora as requisições estão sendo feitas no server por requisição http;
/*const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: forms',
    imageURL: '../../assets/img/cursoAngularIniciante.jpg',
    description: 'Curso de introdução ao angular',
    price: 40,
    code: 'XPS-8796',
    duration: 120,
    rating: 4.4,
    releaseDate: 'March 19, 2019'
  },
  {
    id: 2,
    name: 'Angular: developer avanced',
    imageURL: '../../assets/img/CursoAngularAvancado.jpg',
    description: 'Curso avançado de angular',
    price: 99,
    code: 'XPS-8797',
    duration: 420,
    rating: 3.7,
    releaseDate: 'November 10, 2019'
  },
  {
    id: 3,
    name: '.Net introdution',
    imageURL: '../../assets/img/curso.NetIniciante.jpg',
    description: 'Curso de introdução ao .Net',
    price: 45,
    code: 'XPS-8798',
    duration: 140,
    rating: 5,
    releaseDate: 'March 19, 2019'
  },
  {
    id: 4,
    name: '.Net Avanced',
    imageURL: '../../assets/img/curso.NetAvancado.jpg',
    description: 'Curso avançado de .Net',
    price: 115,
    code: 'XPS-8799',
    duration: 600,
    rating: 4.2,
    releaseDate: 'November 10, 2019'
  },
  {
    id: 5,
    name: 'programming logic introduction ',
    imageURL: '../../assets/img/introducaoLogica.jpg',
    description: 'Curso de introdução a lógica de programação',
    price: 20,
    code: 'XPS-8800',
    duration: 120,
    rating: 3.4,
    releaseDate: 'March 19, 2019'
  }];*/
