package com.sistemas.clinica.resource;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemas.clinica.service.CargardatosService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/datos")
public class DatosResource {
	
	private boolean cargado = false;
	
	private CargardatosService cargardatosService;
	
	@Autowired
	public DatosResource(CargardatosService cargardatosService) {
		this.cargardatosService = cargardatosService;
	}
	
	@GetMapping
	private Map<String, Object> cargar() {
		Map<String, Object> result = new HashMap<>();
		result.put("resultado", "0");
		if (!cargado) {
			cargardatosService.cargarDatos();
			cargado = true;
			result.put("resultado", "1");
		}
		return result;
	}


}
