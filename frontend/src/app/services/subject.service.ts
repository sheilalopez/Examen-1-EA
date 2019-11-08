import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "./environment.service";
import {Subject} from "../models/Subject";
import {Observable} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment= new Environment();
  }
  getSubjects(): Observable<Subject[]>{
  return this.http.get<Subject[]>(this.environment.urlSubject+'/get');
  }
  addSubject(nameSubject){
    return this.http.post(this.environment.urlSubject+'/addSubject',{subject: {name: nameSubject, students: []}});
  }
  joinStudent(nameSubject, nameStudent){
    return this.http.post(this.environment.urlSubject+'/addStudent',{subject:{name: nameSubject},student:{name: nameStudent}});

  }

}
