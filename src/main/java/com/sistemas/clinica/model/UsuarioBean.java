package com.sistemas.clinica.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sistemas.clinica.model.PacienteBean.PacienteBeanBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="USUARIO")
public class UsuarioBean {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String usuario;
	
	private String clave;
	
	private String perfil;
	
	private Date fecIngreso;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private PacienteBean paciente;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private DoctorBean doctor;

}
