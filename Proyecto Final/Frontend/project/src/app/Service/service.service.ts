import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/anewapi/api';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url+"/personas");
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/persona",persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/persona/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/persona/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/persona/"+persona.id);
  }
}