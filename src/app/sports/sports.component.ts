import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private services:NewsapisevicesService) { }

  sportsHeadingDisplay:any =[];

  ngOnInit(): void {
    this.services.sportsnews().subscribe((result)=>{
      console.log(result);
      this.sportsHeadingDisplay = result.articles;      
    })
  }

}
