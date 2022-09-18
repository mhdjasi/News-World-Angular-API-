import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';


@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {

  constructor(private services:NewsapisevicesService) { }

  bussinessHeadingDisplay:any =[];

  ngOnInit(): void {
    this.services.bussinessnews().subscribe((result)=>{
      console.log(result);
      this.bussinessHeadingDisplay = result.articles;      
    })
  }

}
