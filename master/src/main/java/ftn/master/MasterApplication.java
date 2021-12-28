package ftn.master;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MasterApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(MasterApplication.class);
    }
	
	public static void main(String[] args) {
		SpringApplication.run(MasterApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/test_controller/bean").allowedOrigins("http://localhost:3000");
				registry.addMapping("/test_controller/add").allowedOrigins("http://localhost:3000");
				registry.addMapping("/radnik/avg_time_find_by_id/table").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_id_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_id_try_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_join_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_lt_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_min_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_max_times").allowedOrigins("http://localhost:3000");
				registry.addMapping("/res/select_substr_times").allowedOrigins("http://localhost:3000");
			}
		};
	}

}
