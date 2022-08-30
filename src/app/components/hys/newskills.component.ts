import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {
  nameSkill : string ;
  fotoSkill : string ;
  porcentaje : number;

  constructor(private serverSkills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void { 
    const expe = new Skills(this.nameSkill, this.fotoSkill, this.porcentaje);
    this.serverSkills.save(expe).subscribe(
      data => { 
        alert("Skill añadida");
        this.router.navigate(['']);
      },err => { 
        alert("Fallo");
      this.router.navigate(['']);
    })
  }
}
