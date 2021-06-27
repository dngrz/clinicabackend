package com.sistemas.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistemas.clinica.model.UsuarioBean;

public interface UsuarioRepository extends JpaRepository<UsuarioBean, Integer>{
	
	UsuarioBean findOneByUsuario(String usuario);

}
