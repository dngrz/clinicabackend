package com.sistemas.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistemas.clinica.model.DoctorBean;

public interface DoctorRepository extends JpaRepository<DoctorBean, Integer>{

}
