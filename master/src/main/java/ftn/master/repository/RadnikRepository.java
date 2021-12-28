package ftn.master.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import ftn.master.bean.RadnikBean;

@Repository
public interface RadnikRepository extends JpaRepository<RadnikBean, Integer> {

	@Transactional
	@Procedure(name="prosecno_vreme")
	double prosecno_vreme (String upit, Integer brPonavljanja);
	
	
	
}
