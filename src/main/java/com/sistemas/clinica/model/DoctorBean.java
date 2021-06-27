package com.sistemas.clinica.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name="DOCTOR")
public class DoctorBean extends PersonaBean {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String numDni;
	
	private String desEmail;
	
	private String nomCompleto;
	
	private Date fecIngreso;
	
	private String numColegiatura;
	
	private String estudios;
	
    @ManyToOne(fetch = FetchType.EAGER)
	private EspecialidadBean especialidad;
	
}
