import { Injectable } from '@angular/core';
import {Environment} from "./environment.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Especialidad} from "../models/especialidad";


@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment= new Environment();
  }
  getEspecialidades(): Observable<Especialidad[]>{
  return this.http.get<Especialidad[]>(this.environment.urlEspecialidad+'/get')}


  joinStudent(nameStudent,nameEspecialidad){
    return this.http.post(this.environment.urlEspecialidad+'/addStudent',{especialidad:{name:nameEspecialidad},student:{name:nameStudent}})
  }




}


