package ftn.master.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data 
@Entity
@Table(name = "radnik_avg_sel_max_res")
public class SelectMaxBean {

	@Id
	@Column
	private String key; 
	
	@Column
	private Double val; 
	
	public SelectMaxBean () {
		super();
	}
	
	public String getRowId () {
		return this.key; 
	}
	
	public void setRowId (String key) {
		this.key = key; 
	}
	
	public Double getTime () {
		return this.val; 
	}
	
	public void setTime (Double val) {
		this.val = val; 
	}
	
}
