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
    console.log(this.environment.urlStudent);
  return this.http.get<Student[]>(this.environment.urlStudent+'/get');

  }
  addNewStudent(student: Student){
    return this.http.post(this.environment.urlStudent+'/add',{student});
  }
}

