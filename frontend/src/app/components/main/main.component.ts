import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private subjectService: SubjectService, private studentService: StudentService) { }

  subjects: Subject [];
  students: Student[];
  allStudents: Student[];
  currentStudent: Student;
  selectedSubject: Subject;
  selectedStudent: Student;


  async ngOnInit() {
    this.subjects = await this.subjectService.getSubjects().toPromise();
    this.allStudents = await this.studentService.getStudents().toPromise();

  }
 //obtengo estudiantes de una asignatura
  public getStudents(subject){
    //this.students = await this.subjectService.getStudents(subject.name).toPromise();
    this.students = subject.students;
    console.log(subject);
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

}
