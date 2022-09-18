import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private services:NewsapisevicesService) { }

  technologyHeadingDisplay:any =[];

  ngOnInit(): void {
    this.services.technologynews().subscribe((result)=>{
      console.log(result);
      this.technologyHeadingDisplay = result.articles;      
    })
  }

}
