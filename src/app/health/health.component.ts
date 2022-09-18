import { Component, OnInit } from '@angular/core';
import { NewsapisevicesService } from '../service/newsapisevices.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private services:NewsapisevicesService) { }

  healthHeadingDisplay:any =[];

  ngOnInit(): void {
    this.services.healthnews().subscribe((result)=>{
      console.log(result);
      this.healthHeadingDisplay = result.articles;      
    })
  }

}
