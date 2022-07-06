import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: any;
  constructor(private httpClient: HttpClient,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe((data)=> {
      console.log(data);
      this.list = data;
    }, error => {

    })
  }

}
