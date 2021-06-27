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

import com.sistemas.clinica.model.CitaBean;
import com.sistemas.clinica.repository.CitaRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/citas")
public class CitasResource {

	@Autowired
	private CitaRepository citaRepository;

	@GetMapping
    private List<CitaBean> getAll() {
        return citaRepository.findAll();
    }

	@PostMapping
    private CitaBean crear(@RequestBody CitaBean doctor) {
        return citaRepository.save(doctor);
    }
	
	@PutMapping
    private CitaBean actualizar(@RequestBody CitaBean doctor) {
        return citaRepository.save(doctor);
    }

	@GetMapping("/{id}")
    private ResponseEntity<CitaBean> getOneById(@PathVariable("id") Integer id) {
		Optional<CitaBean> bean = citaRepository.findById(id);
		if(bean.isPresent()) {
			return new ResponseEntity<>(bean.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
