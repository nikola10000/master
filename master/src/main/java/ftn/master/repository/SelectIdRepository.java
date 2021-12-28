package ftn.master.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.master.bean.SelectIdBean;

public interface SelectIdRepository extends JpaRepository<SelectIdBean, Integer> {

}
