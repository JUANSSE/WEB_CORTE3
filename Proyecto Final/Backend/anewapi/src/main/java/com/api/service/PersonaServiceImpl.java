package com.api.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.api.dao.PersonaDAO;
import com.api.model.Persona;

@Service
@Transactional(readOnly = true)
public class PersonaServiceImpl implements PersonaService {

	@Autowired
	private PersonaDAO personaDAO;
	
	@Override
	@Transactional
	public int save(Persona person) {
		return personaDAO.save(person);
	}

	@Override
	@Transactional
	public Persona get(int id) {
		return personaDAO.get(id);
	}

	@Override
	@Transactional
	public List<Persona> list() {
		return personaDAO.list();
	}

	@Override
	@Transactional
	public void update(int id, Persona person) {
		personaDAO.update(id, person);
	}

	@Override
	@Transactional
	public void delete(int id) {
		personaDAO.delete(id);
	}

}
