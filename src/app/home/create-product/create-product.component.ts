import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../service/student.service";
import {ClazzService} from "../../service/clazz.service";
import {Clazz} from "../../model/clazz";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup( {
    name: new FormControl(''),
    age: new FormControl(''),
    score: new FormControl(''),
    clazzId: new FormControl('')
  })
  obj: any;
  listClazz: Clazz[] = [];
  constructor(private httpClient: HttpClient,
              private studentService: StudentService,
              private clazzService: ClazzService) { }

  ngOnInit(): void {
    this.clazzService.findAll().subscribe((data)=> {
      console.log(data)
      this.listClazz = data;
    })
  }

  add() {
    console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      age: this.form.value.age,
      score: this.form.value.score,
      clazz: {
        id: this.form.value.clazzId
      }
    }
    this.studentService.save(this.obj).subscribe(()=>{
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    })
  }
}
