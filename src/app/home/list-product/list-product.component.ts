import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: any;
  form = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
  })
  constructor(private httpClient: HttpClient,
              private studentService: StudentService,
  ) {
  }

  ngOnInit(): void {
    this.findAll()

  }

  findAll() {
    this.studentService.findAll().subscribe((data) => {
      console.log(data);
      this.list = data;
    }, error => {

    })
  }

  find() {
    const from = this.form.value.from;
    const to = this.form.value.to;
    this.studentService.findByScore(from, to).subscribe((data) => {
      this.list = data;
    })
  }
}
