package com.sistemas.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistemas.clinica.model.PacienteBean;

public interface PacienteRepository extends JpaRepository<PacienteBean, Integer>{

}
