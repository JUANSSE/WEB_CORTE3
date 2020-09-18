package com.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity (name="Persona")
@Table 
public class Persona {
	@Id
	private int id;
	
	@Column
	private String nombre;
	
	@Column
	private String apellido;

	@Column
	private int tipo_documento;
	
	@Column
	private long documento;
	
	@Column
	private int id_lugar_residencia;
	
	@Column
	private String fecha_nacimiento;
	
	@Column
	private String email;
	
	@Column
	private long telefono;
	
	@Column
	private String usuario;
	
	@Column
	private String password;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getTipo_documento() {
		return tipo_documento;
	}

	public void setTipo_documento(int tipo_documento) {
		this.tipo_documento = tipo_documento;
	}

	public long getDocumento() {
		return documento;
	}

	public void setDocumento(long documento) {
		this.documento = documento;
	}

	public int getId_lugar_residencia() {
		return id_lugar_residencia;
	}

	public void setId_lugar_residencia(int id_lugar_residencia) {
		this.id_lugar_residencia = id_lugar_residencia;
	}

	public String getFecha_nacimiento() {
		return fecha_nacimiento;
	}

	public void setFecha_nacimiento(String fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getTelefono() {
		return telefono;
	}

	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Persona [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", tipo_documento="
				+ tipo_documento + ", documento=" + documento + ", id_lugar_residencia=" + id_lugar_residencia
				+ ", fecha_nacimiento=" + fecha_nacimiento + ", email=" + email + ", telefono=" + telefono
				+ ", usuario=" + usuario + ", password=" + password + "]";
	}
	
}