package com.sistemas.clinica.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemas.clinica.model.UsuarioBean;
import com.sistemas.clinica.repository.UsuarioRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {

	private UsuarioRepository usuarioRepository;
	
	@Autowired
	public UsuarioResource(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}
	
	@GetMapping
    private List<UsuarioBean> getAll() {
        return usuarioRepository.findAll();
    }
	
	@GetMapping("/{id}")
    private ResponseEntity<UsuarioBean> getOneById(@PathVariable("id") Integer id) {
		Optional<UsuarioBean> bean = usuarioRepository.findById(id);
		if(bean.isPresent()) {
			return new ResponseEntity<>(bean.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

	@GetMapping("/usuario/{usuario}")
    private ResponseEntity<UsuarioBean> getOneByUsuario(@PathVariable("usuario") String usuario) {
		UsuarioBean bean = usuarioRepository.findOneByUsuario(usuario);
		if(bean != null) {
			return new ResponseEntity<>(bean, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
