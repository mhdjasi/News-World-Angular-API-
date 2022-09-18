import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private services:NewsapisevicesService) { }

  entertainmentHeadingDisplay:any =[];

  ngOnInit(): void {
    this.services.entertainmentnews().subscribe((result)=>{
      console.log(result);
      this.entertainmentHeadingDisplay = result.articles;      
    })
  }

}
