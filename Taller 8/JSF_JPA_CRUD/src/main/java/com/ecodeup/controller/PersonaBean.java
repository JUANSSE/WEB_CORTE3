package com.ecodeup.controller;


//import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
//import javax.faces.view.facelets.FaceletContext;

import com.ecodeup.dao.PersonaDAO;
import com.ecodeup.model.Persona;

@ManagedBean (name="personaBean")
@RequestScoped
public class PersonaBean {
	


	public List<Persona> obtenerPersonas(){
		

		PersonaDAO PersonaDAO = new PersonaDAO();
		return PersonaDAO.obtenerPersona();

		/*Mostrar vista desde un objeto estático
		List<Persona> listaPersonas = new ArrayList<>();
		Persona p1 = new Persona();
		Persona p2 = new Persona();

		p1.setId(1);
		p1.setNombre("LUIS MIGUEL");
		p1.setApellido("RODRIGUEZ");

		p2.setId(2);
		p2.setNombre("CAMILA");
		p2.setApellido("MENDEZ");

		listaPersonas.add(p1);
		listaPersonas.add(p2);
		return listaPersonas;*/
	}
	
	public String editar(int id) {
		PersonaDAO personaDAO = new  PersonaDAO();
		Persona p = new Persona();
		p=personaDAO.buscar(id);
		System.out.println("*****************************************");
		System.out.println(p);
		
		Map<String, Object> sessionMap=FacesContext.getCurrentInstance().getExternalContext().getSessionMap();
		sessionMap.put("persona", p);
		return "/faces/editar.xhtml";
	}
	
	public String actualizar(Persona p) {
		PersonaDAO personaDAO = new PersonaDAO();
		personaDAO.editar(p);
		return "/faces/index.xhtml";
	}
	
	public String eliminar(int id) {
		PersonaDAO personaDAO = new PersonaDAO();
		personaDAO.eliminar(id);
		System.out.println("Persona eliminada...");
		return "/faces/index.xhtml";
	}
	
	public String nuevo() {
		Persona p = new Persona();
		Map<String, Object> sessionMap=FacesContext.getCurrentInstance().getExternalContext().getSessionMap();
		sessionMap.put("persona", p);
		return "/faces/nuevo.xhtml";
		
	}
	
	public String guardar(Persona p) {
		PersonaDAO personaDAO = new PersonaDAO();
		personaDAO.guardar(p);
		return "/faces/index.xhtml";
	}
}