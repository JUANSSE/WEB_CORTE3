import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  persona: Persona[];
  constructor(private personaService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.personaService.getPersonas()
      .subscribe(data => {
        this.persona = data;
      });
  }
  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.personaService.deletePersona(persona)
    .subscribe(data=>{
      this.persona=this.persona.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

}