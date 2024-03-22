import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/models/datum';
import { DatumService } from '../datum.service';

@Component({
  selector: 'app-rok',
  templateUrl: './rok.component.html',
  styleUrls: ['./rok.component.css']
})
export class RokComponent implements OnInit {

  constructor(private datumService:DatumService) { }

  ngOnInit(): void {
    this.datumService.dohvati(1).subscribe((data:Datum)=>{
this.datum=data;
    })
  }

  promeni(){
    this.datumService.rok(this.a).subscribe((d:Datum)=>{
this.datum=d;
this.ngOnInit();
    })
    

  }
  a:number;
  
  datum:Datum;

}
