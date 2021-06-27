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
import com.sistemas.clinica.repository.DoctorRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/doctores")
public class DoctorResource {
	
	private DoctorRepository doctorRepository;
	
	@Autowired
	public DoctorResource(DoctorRepository doctorRepository) {
		this.doctorRepository = doctorRepository;
	}

	@GetMapping
    private List<DoctorBean> getAll() {
        return doctorRepository.findAll();
    }

	@PostMapping
    private DoctorBean crear(@RequestBody DoctorBean doctor) {
        return doctorRepository.save(doctor);
    }
	
	@PutMapping
    private DoctorBean actualizar(@RequestBody DoctorBean doctor) {
        return doctorRepository.save(doctor);
    }

	@GetMapping("/{id}")
    private ResponseEntity<DoctorBean> getOneById(@PathVariable("id") Integer id) {
		Optional<DoctorBean> bean = doctorRepository.findById(id);
		if(bean.isPresent()) {
			return new ResponseEntity<>(bean.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
