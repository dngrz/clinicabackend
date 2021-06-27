package com.sistemas.clinica.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemas.clinica.model.EspecialidadBean;
import com.sistemas.clinica.repository.EspecialidadRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/especialidades")
public class EspecialidadResource {
    
    private EspecialidadRepository especialidadRepository;
    
    @Autowired
    public EspecialidadResource(EspecialidadRepository especialidadRepository) {
		this.especialidadRepository = especialidadRepository;
	}
    
    @GetMapping
    private List<EspecialidadBean> getEspecialidades() {
        return especialidadRepository.findAll();
    }
    
    

}
