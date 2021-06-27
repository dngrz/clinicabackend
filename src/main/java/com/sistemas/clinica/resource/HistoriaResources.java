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
import com.sistemas.clinica.model.HistoriaBean;
import com.sistemas.clinica.repository.HistoriaRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/historias")
public class HistoriaResources {

	private HistoriaRepository historiaRepository;
	
	@Autowired
	public HistoriaResources(HistoriaRepository historiaRepository) {
		this.historiaRepository = historiaRepository;	
	}
	
	@GetMapping
	private List<HistoriaBean> getAll(){
		return historiaRepository.findAll();
	}
	
	@GetMapping("/{id}")
	private ResponseEntity<HistoriaBean> obtenerPorId(@PathVariable("id") Integer idHistoria){
		Optional<HistoriaBean> bean = historiaRepository.findById(idHistoria);
		if(bean.isPresent()) {
			return new ResponseEntity<>(bean.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

	@GetMapping("/paciente/{idPaciente}")
	private List<HistoriaBean> obtenerPorIdPaciente(@PathVariable("idPaciente") Integer idPaciente){
		return historiaRepository.findAllByPaciente(idPaciente);
	}
	
	@PostMapping
    private HistoriaBean crear(@RequestBody HistoriaBean doctor) {
        return historiaRepository.save(doctor);
    }
	
	@PutMapping
    private HistoriaBean actualizar(@RequestBody HistoriaBean doctor) {
        return historiaRepository.save(doctor);
    }
}
