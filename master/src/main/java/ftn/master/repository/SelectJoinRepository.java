package ftn.master.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ftn.master.bean.SelectJoinBean;

public interface SelectJoinRepository extends JpaRepository<SelectJoinBean, Integer> {

}
