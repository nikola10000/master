package ftn.master.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.master.bean.SelectMaxBean;

public interface SelectMaxRepository extends JpaRepository<SelectMaxBean, Integer> {

}
