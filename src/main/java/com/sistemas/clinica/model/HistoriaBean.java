package com.sistemas.clinica.model;


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
@Table(name="HISTORIA")
public class HistoriaBean {
	
	@Id
	@GeneratedValue
	private Integer id;

	private Date fecha;
	
	private String observaciones;
	
    @ManyToOne(fetch = FetchType.EAGER)
	private PacienteBean paciente;
	
}
