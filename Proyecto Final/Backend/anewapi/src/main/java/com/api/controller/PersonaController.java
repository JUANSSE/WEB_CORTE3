package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.model.Persona;
import com.api.service.PersonaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {
	@Autowired
	private PersonaService personaService;

	@GetMapping("/api/personas")
	public ResponseEntity<List<Persona>> getPersonas(){

		List<Persona> list = personaService.list();
		return ResponseEntity.ok().body(list);
	}
	//save persona
	@PostMapping("/api/persona")
	public ResponseEntity<?> save(@RequestBody Persona person){
		long id=personaService.save(person);
		return ResponseEntity.ok().body("¡La Persona con id "+id+" ha sido guardada correctamente!");
	}

	//get persona
	@GetMapping("/api/persona/{id}")
	public ResponseEntity<Persona> get(@PathVariable("id") int id){
		Persona person=personaService.get(id);
		return ResponseEntity.ok().body(person);
	}
	//set persona
	@PutMapping("/api/persona/{id}")
	public ResponseEntity<?> update (@PathVariable("id") int id, @RequestBody Persona person){
		personaService.update(id, person);
		return ResponseEntity.ok().body("Persona "+id+" ha sido actualizada correctamente");
	}
	//delete persona
	@DeleteMapping("/api/persona/{id}")
	public ResponseEntity<?> delete (@PathVariable("id") int id){
		personaService.delete(id);
		return ResponseEntity.ok().body("Persona "+id+" ha sido eliminada correctamente");
	}
}

