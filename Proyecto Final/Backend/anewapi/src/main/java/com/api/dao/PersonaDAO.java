package com.api.dao;

import java.util.List;

import com.api.model.Persona;

public interface PersonaDAO {

	int save(Persona person);
	Persona get(int id);
	List<Persona> list();
	void update(int id, Persona person);
	void delete(int id);
	
}
