package com.sistemas.clinica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sistemas.clinica.model.HistoriaBean;

public interface HistoriaRepository extends JpaRepository<HistoriaBean, Integer>{

	@Query("select h from HistoriaBean h where h.paciente.id = :idPaciente")
	List<HistoriaBean>findAllByPaciente(@Param("idPaciente") Integer idPaciente);

}
