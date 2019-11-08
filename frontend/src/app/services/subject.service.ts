import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "./environment.service";
import {Subject} from "../models/Subject";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment= new Environment();
  }
  getSubjects(): Observable<Subject[]>{
  return this.http.get<Subject[]>(this.environment.urlSubject+'/subject/get');
  }
  addSubject(nameSubject){
    return this.http.post(this.environment.urlSubject+'/subject/add',{subject: {name: nameSubject, students: []}});
  }
  joinStudent(nameSubject, nameStudent){
    return this.http.post(this.environment.urlSubject+'/subject/addNew',{subject:{name: nameSubject},student:{name: nameStudent}});

  }
}
