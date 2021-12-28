package ftn.master.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data 
@Entity
@Table(name = "radnik_1")
public class RadnikBean {

	@Id
	@Column
	private int mbr; 

	@Column
	private String ime; 

	@Column
	private String prz; 

	@Column
	private int sef; 

	@Column
	private double plt; 

	@Column
	private double pre; 

	@Column
	private Date god; 
	
	public RadnikBean () {
		super();
	}
	
	public void setMbr (int mbr) {
		this.mbr = mbr;
	}
	
	public int getMbr () {
		return mbr; 
	}

	public void setIme (String ime) {
		this.ime = ime; 
	}
	
	public String getIme () {
		return ime; 
	}
	
	public void setPrz (String prz) {
		this.prz = prz; 
	}
	
	public String getPrz () {
		return prz; 
	}
	
	public void setSef (int sef) {
		this.sef = sef; 
	}
	
	public int getSef () {
		return sef; 
	}
	
	public void setPlt (double plt) {
		this.plt = plt; 
	}
	
	public double getPlt () {
		return plt; 
	}
	
	public void setPre (double pre) {
		this.pre = pre; 
	}
	
	public double getPre() {
		return pre; 
	}
	
	public void setGod (Date god) {
		this.god = god;
	}
	
	public Date getGod () {
		return this.god; 
	}
	
}
