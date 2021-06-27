package com.sistemas.clinica.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="PACIENTE")
public class PacienteBean extends PersonaBean {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String nomCompleto;
	
	private String numDni;
	
	private String correo;
	
	private String numTelefono;
	
	private Date fecNacimiento;
	
	private String direccion;
	
	private Integer edad;
	
	private Date fecIngreso;

	
}
