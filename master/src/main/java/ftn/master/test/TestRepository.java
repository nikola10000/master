package ftn.master.test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface TestRepository extends JpaRepository <TestBean, Integer> {

    @Query(value="SELECT * FROM test_bean order by kljuc", nativeQuery = true)
    ArrayList<TestBean> getBeans();

}


//    @Query("SELECT u FROM User u WHERE u.status = 1")
//    Collection<User> findAllActiveUsers();

//value = "SELECT * FROM USERS u WHERE u.status = 1",
//        nativeQuery = true