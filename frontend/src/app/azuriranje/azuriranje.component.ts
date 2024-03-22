import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Knjiga } from 'src/models/knjiga';
import { KnjigaService } from '../knjiga.service';

@Component({
  selector: 'app-azuriranje',
  templateUrl: './azuriranje.component.html',
  styleUrls: ['./azuriranje.component.css']
})
export class AzuriranjeComponent implements OnInit {

  constructor(private knjigaService:KnjigaService , private ruter:Router) { }

  ngOnInit(): void {
    this.knjiga=(JSON.parse(localStorage.getItem("knjiga")));

    this.knjigaService.dohvatiKnjigu(this.knjiga.id).subscribe((k:Knjiga)=>{
      this.knjiga=k;
    })
    
   
  }

  selectedFile: File = null;



  greska:string;
greskaGod:string;
knjiga:Knjiga;

azuriraj(){
  

  this.knjigaService.azuriraj(this.knjiga.id,this.knjiga.broj,this.knjiga.naziv,this.knjiga.autor,this.knjiga.zanr,
    this.knjiga.izdavac,this.knjiga.godinaIzdavanja,
    this.knjiga.jezik,this.knjiga.slika).subscribe((k:Knjiga)=>{
      //localStorage.setItem('knjiga',JSON.stringify(k));
      alert('azurirano');
     this.ngOnInit();
     this.ruter.navigate(['azuriraj']);
    })
}


onFileSelected(event: any){
    
  if(event.target.files && event.target.files[0]){
  
    
    this.selectedFile = <File>event.target.files[0];

    if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpg" || this.selectedFile.type == "image/jpeg"){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
       
            
           this. knjiga.slika =  e.target.result;
            //this.provera = true;

             return true;
       
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    } else {
      alert("Лош формат слике")
    }
  }
}
o=[]

sp(a){
  for(let i=0;i<this.knjiga.zanr.length;i=i+1){
    if(this.knjiga.zanr[i]==a)
    return false;
  }
return true;
}

}
