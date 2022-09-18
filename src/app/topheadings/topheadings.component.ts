import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {

  constructor( private services:NewsapisevicesService) { }

  topHeadingDisplay:any = [];

  ngOnInit(): void {

    this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;      
    })
  }

}
