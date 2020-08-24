package com.ecodeup.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.ecodeup.model.Persona;
import com.ecodeup.model.JPAUtil;

public class PersonaDAO {
	EntityManager entity = JPAUtil.getEntityManagerFactory().createEntityManager();

	// guardar persona
	public void guardar(Persona persona) {
		entity.getTransaction().begin();
		entity.persist(persona);
		entity.getTransaction().commit();
		//JPAUtil.shutdown();
	}

	// editar cliente
	public void editar(Persona persona) {
		entity.getTransaction().begin();
		entity.merge(persona);
		entity.getTransaction().commit();
		//JPAUtil.shutdown();
	}

	// buscar cliente
	public Persona buscar(int id) {
		Persona p = new Persona();
		p = entity.find(Persona.class, id);
		//JPAUtil.shutdown();
		return p;
	}

	// eliminar persona
	public void eliminar(int id) {
		Persona p = new Persona();
		p = entity.find(Persona.class, id);
		entity.getTransaction().begin();
		entity.remove(p);
		entity.getTransaction().commit();
	}

	// obtener todos los persona
	public List<Persona> obtenerPersona() {
		List<Persona> listaPersona = new ArrayList<>();
		Query q = entity.createQuery("SELECT p FROM Persona p");
		listaPersona = q.getResultList();
		return listaPersona;
	}

}