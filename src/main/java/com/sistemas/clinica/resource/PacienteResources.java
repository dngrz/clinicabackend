package com.sistemas.clinica.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemas.clinica.model.DoctorBean;
import com.sistemas.clinica.model.PacienteBean;
import com.sistemas.clinica.repository.PacienteRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/pacientes")
public class PacienteResources {

	private PacienteRepository pacienteRepository;
	
	@Autowired
	public PacienteResources(PacienteRepository pacienteRepository) {
		this.pacienteRepository = pacienteRepository;	
	}
	
	@GetMapping
	private List<PacienteBean> getAll(){
		return pacienteRepository.findAll();
	}
	
	@PostMapping
    private PacienteBean crear(@RequestBody PacienteBean doctor) {
        return pacienteRepository.save(doctor);
    }
	
	@PutMapping
    private PacienteBean actualizar(@RequestBody PacienteBean doctor) {
        return pacienteRepository.save(doctor);
    }

	@GetMapping("/{id}")
    private ResponseEntity<PacienteBean> getOneById(@PathVariable("id") Integer id) {
		Optional<PacienteBean> bean = pacienteRepository.findById(id);
		if(bean.isPresent()) {
			return new ResponseEntity<>(bean.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
}
