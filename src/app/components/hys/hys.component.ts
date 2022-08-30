import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skills[] = []; 

  constructor(private serverSkills: SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.serverSkills.lista().subscribe(
      data => {
        this.skills = data;
            })
        }
      
        delete(id?: number){
          if(id != undefined){
            this.serverSkills.delete(id).subscribe(data => {this.cargarSkills();
            },err =>{
              alert("No se pudo borrar la skill");
            }
            )
          }
        }
  }
