import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {FormControl} from "@angular/forms";
import {Especialidad} from "../../models/especialidad";
import {EspecialidadService} from "../../services/especialidad.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private subjectService: SubjectService, private studentService: StudentService, private especialidadService: EspecialidadService) { }

  subjects: Subject [];
  students: Student[];
  allStudents: Student[];
  currentStudent: Student;
  selectedSubject: Subject;
  selectedStudent: Student;
  especialidades: Especialidad[];
  studentsC: Student[];
  studentC: Student;
  form: FormControl = new FormControl();


  async ngOnInit() {
    this.subjects = await this.subjectService.getSubjects().toPromise();
    this.allStudents = await this.studentService.getStudents().toPromise();
    this.especialidades = await this.especialidadService.getEspecialidades().toPromise();

  }
 //obtengo estudiantes de una asignatura
  public getStudents(subject){
    //this.students = await this.subjectService.getStudents(subject.name).toPromise();
    this.students = subject.students;
    console.log(subject);
  }
  //obtengo estudiantes de una carrera
  public getStudentsC(especialidad){
    this.studentsC = especialidad.studentsC;
    console.log(especialidad);
  }
  public getInfoStudent(student){
    this.currentStudent = student;

  }
  public saveStudent(student){
    this.selectedStudent = student;
    console.log(student);
  }


  public saveSubject(subject){
    this.selectedSubject = subject;
  }
  public async joinStudent(){
   await this.subjectService.joinStudent(this.selectedSubject.name,this.selectedStudent.name).toPromise();
  }
  public async addSubject (){
    await this.subjectService.addSubject(this.form.value).toPromise();

  }

}
