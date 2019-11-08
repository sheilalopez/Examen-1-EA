import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Environment} from "./environment.service";
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getStudents(): Observable<Student[]>{
  return this.http.get<Student[]>(this.environment.urlStudent+'/student/get');
  }
  addNewStudent(student: Student){
    return this.http.post(this.environment.urlStudent+'/student/add',{student});
  }
}

