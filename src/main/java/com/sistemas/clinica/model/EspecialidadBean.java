package com.sistemas.clinica.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name="ESPECIALIDAD")
public class EspecialidadBean implements Serializable {
	
	private static final long serialVersionUID = -94234593515916309L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    private String nomEspecialidad;

}
