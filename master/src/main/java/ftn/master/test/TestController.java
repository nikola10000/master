package ftn.master.test;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test_controller")
public class TestController {

	@Autowired
	private TestRepository testRepository;
	
	public TestController () {
		System.out.println("Ja ziv");
	}
	
	@GetMapping("/test")
	public String test (@RequestParam(name="name", required = false, defaultValue = "World") String name) {
		return "Hello " + name + ", I'm the Test Controller! =D";
	}
	
	@GetMapping(value = "/bean")    //http://localhost:8082/test/bean
	public ArrayList<String> listAll (TestBean testBean) {
		ArrayList<String> retVal = new ArrayList<>();
	    List<TestBean> listTestBeanz = testRepository.getBeans();
	    for (TestBean b : listTestBeanz) {
	        retVal.add(b.getValue());
	    }
	    return retVal;
	}

	@RequestMapping(value = "/add", consumes = MediaType.APPLICATION_JSON,
				method = RequestMethod.POST)    //http://localhost:8082/test/add
	public void addLine (@RequestBody TestBean line) {
	    testRepository.save(line);
	}
	
}
