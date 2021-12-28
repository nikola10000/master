package ftn.master.test;


import javax.persistence.*;

@Entity
public class TestBean {

    @Id
    @Column(name = "kljuc")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "vrednost")
    private String value;

    public TestBean () {
        super();
    }

    public TestBean (String line) {
        this.value = line;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public String getValue() {
        return value;
    }
}
