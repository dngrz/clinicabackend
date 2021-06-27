package com.sistemas.clinica.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemas.clinica.model.CitaBean;
import com.sistemas.clinica.model.DoctorBean;
import com.sistemas.clinica.model.EspecialidadBean;
import com.sistemas.clinica.model.HistoriaBean;
import com.sistemas.clinica.model.PacienteBean;
import com.sistemas.clinica.model.UsuarioBean;
import com.sistemas.clinica.repository.CitaRepository;
import com.sistemas.clinica.repository.DoctorRepository;
import com.sistemas.clinica.repository.EspecialidadRepository;
import com.sistemas.clinica.repository.HistoriaRepository;
import com.sistemas.clinica.repository.PacienteRepository;
import com.sistemas.clinica.repository.UsuarioRepository;

@Service
public class CargardatosService {

	@Autowired
	private EspecialidadRepository especialidadRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private PacienteRepository pacienteRepository;
	
	@Autowired
	private HistoriaRepository historiaRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CitaRepository citaRepository;
	public void cargarDatos() {

		EspecialidadBean cardiologoS = EspecialidadBean.builder().nomEspecialidad("Cardiología").build();
		EspecialidadBean dermatologoS = EspecialidadBean.builder().nomEspecialidad("Dermatología").build();
		EspecialidadBean pediatraS = EspecialidadBean.builder().nomEspecialidad("Pediatría").build();
		EspecialidadBean psicologoS = EspecialidadBean.builder().nomEspecialidad("Psicología").build();
		
		EspecialidadBean cardiologo = especialidadRepository.save(cardiologoS);
		EspecialidadBean dermatologo = especialidadRepository.save(dermatologoS);
		EspecialidadBean pediatra = especialidadRepository.save(pediatraS);
		EspecialidadBean psicologo = especialidadRepository.save(psicologoS);

		Calendar cal = Calendar.getInstance();
        cal.set(2018, 3, 10);
        
        Date fecIngreso = cal.getTime();
        
        Date fecNacimiento = cal.getTime();
        cal.set(1982, 02, 06);
        
		DoctorBean doctor1 = DoctorBean.builder().numDni("42111111").desEmail("alira@gmail.com").nomCompleto("LIRA GUILLEN, ARTURO").especialidad(cardiologo).numColegiatura("CMP: 19665").estudios("CARDIOLOGÍA - UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS (1991).").fecIngreso(fecIngreso).build();
		DoctorBean doctor2 = DoctorBean.builder().numDni("42111122").desEmail("eperez@gmail.com").nomCompleto("PEREZ DEL PORTAL, ENRIQUE").especialidad(cardiologo).numColegiatura("CMP: 15885").estudios("CARDIOLOGÍA - UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS (1993)").fecIngreso(fecIngreso).build();
		DoctorBean doctor3 = DoctorBean.builder().numDni("42111133").desEmail("jvaldivia@gmail.com").nomCompleto("VALDIVIA ZEBALLOS, JOSE JAVIER").especialidad(cardiologo).numColegiatura("CPM: 27582").estudios("CARDIOLOGÍA - UNIVERSIDAD PERUANA CAYETANO HEREDIA (1995 - 1999)").fecIngreso(fecIngreso).build();
		DoctorBean doctor4 = DoctorBean.builder().numDni("42111144").desEmail("rnovoa@gmail.com").nomCompleto("NOVOA ENCINAS, ROXANA MILAGROS").especialidad(dermatologo).numColegiatura("CPM: 36605").estudios("MEDICINA HUMANA - UNIVERSIDAD NACIONAL DE SAN AGUSTIN, AREQUIPA (2000)").fecIngreso(fecIngreso).build();
		DoctorBean doctor5 = DoctorBean.builder().numDni("42111155").desEmail("ealca@gmail.com").nomCompleto("ALCA VILLARROEL, EDWARD FREDDY").especialidad(dermatologo).numColegiatura("CPM: 40895").estudios("MEDICINA HUMANA - UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS (1996 - 2002)").fecIngreso(fecIngreso).build();
		DoctorBean doctor6 = DoctorBean.builder().numDni("42111166").desEmail("mcaciano@gmail.com").nomCompleto("CACIANO JARES, MARIA ISABEL").especialidad(dermatologo).numColegiatura("CMP: 25789").estudios("MEDICINA HUMANA - UNIVERSIDAD NACIONAL FEDERICO VILLARREAL (1982 - 1990)").fecIngreso(fecIngreso).build();
		DoctorBean doctor7 = DoctorBean.builder().numDni("42111177").desEmail("canderzon@gmail.com").nomCompleto("ANDERSON DIAZ, CARLOS").especialidad(dermatologo).numColegiatura("CMP: 029139").estudios("MEDICINA HUMANA - UNIVERSIDAD CAYETANO HEREDIA (1995)").fecIngreso(fecIngreso).build();
		DoctorBean doctor8 = DoctorBean.builder().numDni("42111188").desEmail("laragon@gmail.com").nomCompleto("ARAGÓN APARICIO, LILIA ANANI").especialidad(dermatologo).numColegiatura("CPSP: 5059").estudios("PSICOLOGÍA - UNIVERSIDAD FEMENINA DEL SAGRADO CORAZON (1977 – 1982)").fecIngreso(fecIngreso).build();
		
		List<DoctorBean> doctores = new ArrayList<>();
		doctores.add(doctor1);
		doctores.add(doctor2);
		doctores.add(doctor3);
		doctores.add(doctor4);
		doctores.add(doctor5);
		doctores.add(doctor6);
		doctores.add(doctor7);
		doctores.add(doctor8);
		
		doctores.stream().forEach(s -> {
			doctorRepository.save(s);
		});
		
		List<PacienteBean> pacientes = new ArrayList<>();
		PacienteBean paciente1 = PacienteBean.builder().nomCompleto("VILLENA FUENTES, ANA MARIA").correo("avillena@gmail.com").edad(21).numDni("32323232").direccion("Lima / Pueblo Libre").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("975757575").build();
		PacienteBean paciente2 = PacienteBean.builder().nomCompleto("PEREZ PINEDO, SANDRA").correo("sperez@gmail.com").edad(21).numDni("32323232").direccion("Lima / La Victoria").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("933333333").build();
		PacienteBean paciente3 = PacienteBean.builder().nomCompleto("RUIZ RUIZ, RAUL").correo("rruiz@gmail.com").edad(21).numDni("32323232").direccion("Lima / San Isidro").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("990909090").build();
		PacienteBean paciente4 = PacienteBean.builder().nomCompleto("SANCHEZ PALACIOS, CARLOS").correo("csanchezp@gmail.com").edad(21).numDni("32323232").direccion("Lima / San Martín").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("996666666").build();
		PacienteBean paciente5 = PacienteBean.builder().nomCompleto("SANTOS SANCHEZ, MONICA").correo("msantos@gmail.com").edad(21).numDni("32323232").direccion("Lima / Chorrillos").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("978521412").build();
		PacienteBean paciente6 = PacienteBean.builder().nomCompleto("CASTILLO TERRONES, PEDRO").correo("pcastillo@gmail.com").edad(21).numDni("32323232").direccion("Lima / Santa Anita").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("999445522").build();
		PacienteBean paciente7 = PacienteBean.builder().nomCompleto("FUJIMORI HIGUCHI, KEYKO").correo("kfujimori@gmail.com").edad(21).numDni("32323232").direccion("Lima / San Miguel").fecIngreso(fecIngreso).fecNacimiento(fecNacimiento).numTelefono("935222122").build();
		
		pacientes.add(paciente1);
		pacientes.add(paciente2);
		pacientes.add(paciente3);
		pacientes.add(paciente4);
		pacientes.add(paciente5);
		pacientes.add(paciente6);
		pacientes.add(paciente7);
		
		pacientes.stream().forEach(s -> {
			pacienteRepository.save(s);
		});
		
		HistoriaBean h1 = HistoriaBean.builder().fecha(new Date(2021,1,15)).observaciones("Todo en Orden, se deriva al paciente a su casa.").paciente(paciente1).build();
		HistoriaBean h2 = HistoriaBean.builder().fecha(new Date(2021,2,10)).observaciones("Tiene Fiebre, se le receta paracetaml de 500mg.").paciente(paciente1).build();
		HistoriaBean h3 = HistoriaBean.builder().fecha(new Date(2021,3,16)).observaciones("Tiene Tos, se le receta un te caliente.").paciente(paciente1).build();
		HistoriaBean h4 = HistoriaBean.builder().fecha(new Date(2021,4,15)).observaciones("Tiene Faringitis, se le receta 100 aspirinas.").paciente(paciente1).build();
		
		HistoriaBean h5 = HistoriaBean.builder().fecha(new Date(2021,1,15)).observaciones("Se detecta Fiebre de 39 grados. Se receta Medicinas.").paciente(paciente3).build();
		HistoriaBean h6 = HistoriaBean.builder().fecha(new Date(2021,2,10)).observaciones("Se Ordena analisis del hígado. Tomar Sal de Andrews").paciente(paciente3).build();
		HistoriaBean h7 = HistoriaBean.builder().fecha(new Date(2021,3,16)).observaciones("Se receta despistaje de coronavirus.").paciente(paciente3).build();
		HistoriaBean h8 = HistoriaBean.builder().fecha(new Date(2021,4,15)).observaciones("Se receta descanso medico de 50 dias.").paciente(paciente3).build();

		historiaRepository.save(h1);
		historiaRepository.save(h2);
		historiaRepository.save(h3);
		historiaRepository.save(h4);
		historiaRepository.save(h5);
		historiaRepository.save(h6);
		historiaRepository.save(h7);
		historiaRepository.save(h8);
		
		UsuarioBean u1 = UsuarioBean.builder().usuario("doctor1").clave("123").fecIngreso(fecIngreso).doctor(doctor1).perfil("DOCTOR").build();
		UsuarioBean u2 = UsuarioBean.builder().usuario("doctor2").clave("123").fecIngreso(fecIngreso).doctor(doctor2).perfil("DOCTOR").build();
		UsuarioBean u3 = UsuarioBean.builder().usuario("paciente1").clave("123").fecIngreso(fecIngreso).paciente(paciente1).perfil("PACIENTE").build();
		UsuarioBean u4 = UsuarioBean.builder().usuario("paciente2").clave("123").fecIngreso(fecIngreso).paciente(paciente2).perfil("PACIENTE").build();
		UsuarioBean u5 = UsuarioBean.builder().usuario("secretaria").clave("123").fecIngreso(fecIngreso).perfil("SECRETARIA").build();
		
		usuarioRepository.save(u1);
		usuarioRepository.save(u2);
		usuarioRepository.save(u3);
		usuarioRepository.save(u4);
		usuarioRepository.save(u5);
		
		CitaBean c1 = CitaBean.builder().doctor(doctor1).especialidad(cardiologo).fecCita(fecIngreso).paciente(paciente1).horCita("08:00").mtoCita(new BigDecimal(100.00)).indCancelado(false).build();
		CitaBean c2 = CitaBean.builder().doctor(doctor2).especialidad(cardiologo).fecCita(fecIngreso).paciente(paciente2).horCita("09:00").mtoCita(new BigDecimal(110.00)).indCancelado(false).build();
		CitaBean c3 = CitaBean.builder().doctor(doctor3).especialidad(cardiologo).fecCita(fecIngreso).paciente(paciente3).horCita("09:00").mtoCita(new BigDecimal(120.00)).indCancelado(false).build();
		CitaBean c4 = CitaBean.builder().doctor(doctor4).especialidad(dermatologo).fecCita(fecIngreso).paciente(paciente2).horCita("09:00").mtoCita(new BigDecimal(90.00)).indCancelado(false).build();
		CitaBean c5 = CitaBean.builder().doctor(doctor5).especialidad(dermatologo).fecCita(fecIngreso).paciente(paciente1).horCita("09:00").mtoCita(new BigDecimal(120.00)).indCancelado(false).build();
				
		citaRepository.save(c1);
		citaRepository.save(c2);
		citaRepository.save(c3);
		citaRepository.save(c4);
		citaRepository.save(c5);
	}

}
