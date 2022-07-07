import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Clazz} from "../../model/clazz";
import {ClazzService} from "../../service/clazz.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    age: new FormControl(''),
    score: new FormControl(''),
    clazz: new FormGroup({
      id: new FormControl('')
    })
  })
  obj: any;
  listClazz: Clazz[] = [];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private clazzService: ClazzService) {
  }

  ngOnInit(): void {
    this.clazzService.findAll().subscribe((data) => {
      this.listClazz = data;
    })
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })

  }

  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data)
      this.form.setValue(data)
    })
  }
  save () {
    console.log(this.form.value)
    this.studentService.update(this.form.value, this.form.value.id).subscribe(()=> {
      alert('Thành công');
    }, error => {
      console.log(error);
    })
  }
}
