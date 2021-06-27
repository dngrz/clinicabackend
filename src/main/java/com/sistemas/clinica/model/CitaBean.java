package com.sistemas.clinica.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="CITA")
public class CitaBean implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private Date fecCita;
	
	private String horCita;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private PacienteBean paciente;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private DoctorBean doctor;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private EspecialidadBean especialidad;
	
	private BigDecimal mtoCita;
	
	private Boolean indCancelado;

}
