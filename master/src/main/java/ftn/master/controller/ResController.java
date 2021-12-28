package ftn.master.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ftn.master.repository.SelectIdRepository;
import ftn.master.repository.SelectIdTryRepository;
import ftn.master.repository.SelectJoinRepository;
import ftn.master.repository.SelectLtRepository;
import ftn.master.repository.SelectMaxRepository;
import ftn.master.repository.SelectMinRepository;
import ftn.master.repository.SelectSubstrRepository;

@RestController
@RequestMapping("/res")
public class ResController {

	@Autowired
	private SelectIdRepository selectIdRepository; 
	
	@Autowired
	private SelectIdTryRepository selectIdTryRepository; 
	
	@Autowired
	private SelectJoinRepository selectJoinRepository; 
	
	@Autowired 
	private SelectLtRepository selectLtRepository; 
	
	@Autowired
	private SelectMinRepository selectMinRepository; 
	
	@Autowired
	private SelectMaxRepository selectMaxRepository; 
	
	@Autowired
	private SelectSubstrRepository selectSubstrRepository; 
	
	public ResController() {
		System.out.println("Res controller is up. ");
	}
	
	@GetMapping("/test")					//http://localhost:8082/master/res/test
	public String resControllerTest () {
		return "Res controller test works.";
	}
	
	@GetMapping("/select_id_times") 
	public ResponseEntity<Object> getAllSelectIdTimes () {		
		return new ResponseEntity<Object>(selectIdRepository.findAll(), HttpStatus.OK); 
	}
	
	@GetMapping("/select_id_try_times") 
	public ResponseEntity<Object> getAllSelectIdTryTimes () {		
		return new ResponseEntity<Object>(selectIdTryRepository.findAll(), HttpStatus.OK); 
	}
	
	@GetMapping("/select_join_times") 
	public ResponseEntity<Object> getAllSelectJoinTimes () {		
		return new ResponseEntity<Object>(selectJoinRepository.findAll(), HttpStatus.OK); 
	}
	
	@GetMapping("/select_lt_times") 
	public ResponseEntity<Object> getAllSelectLtTimes () {		
		return new ResponseEntity<Object>(selectLtRepository.findAll(), HttpStatus.OK); 
	}
	
	@GetMapping("/select_min_times") 
	public ResponseEntity<Object> getAllSelectMinTimes () {		
		return new ResponseEntity<Object>(selectMinRepository.findAll(), HttpStatus.OK); 
	} 
	
	@GetMapping("/select_max_times") 
	public ResponseEntity<Object> getAllSelectMaxTimes () {		
		return new ResponseEntity<Object>(selectMaxRepository.findAll(), HttpStatus.OK); 
	} 
	
	@GetMapping("/select_substr_times") 
	public ResponseEntity<Object> getAllSelectSubstrTimes () {		
		return new ResponseEntity<Object>(selectSubstrRepository.findAll(), HttpStatus.OK); 
	}  
	
}
