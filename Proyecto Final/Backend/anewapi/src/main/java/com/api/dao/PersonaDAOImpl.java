package com.api.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.model.Persona;

@Repository
public class PersonaDAOImpl implements PersonaDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public int save(Persona person) {
		sessionFactory.getCurrentSession().save(person);
		return person.getId();
	}

	@Override
	public Persona get(int id) {
		return sessionFactory.getCurrentSession().get(Persona.class, id);
	}

	@Override
	public List<Persona> list() {
		List<Persona> lista = sessionFactory.getCurrentSession().createQuery("from Persona").list();
		return lista;
	}

	@Override
	public void update(int id, Persona person) {
		Session session= sessionFactory.getCurrentSession();
		Persona persona=session.byId(Persona.class).load(id);
		persona.setId(person.getId());
		persona.setNombre(person.getNombre());
		persona.setApellido(person.getApellido());
		persona.setTipo_documento(person.getTipo_documento());
		persona.setDocumento(person.getDocumento());
		persona.setId_lugar_residencia(person.getId_lugar_residencia());
		persona.setFecha_nacimiento(person.getFecha_nacimiento());
		persona.setEmail(person.getEmail());
		persona.setTelefono(person.getTelefono());
		persona.setUsuario(person.getUsuario());
		persona.setPassword(person.getPassword());
		session.flush();
	}

	@Override
	public void delete(int id) {
		Persona person= sessionFactory.getCurrentSession().byId(Persona.class).load(id);
		sessionFactory.getCurrentSession().delete(person);
	}
}
