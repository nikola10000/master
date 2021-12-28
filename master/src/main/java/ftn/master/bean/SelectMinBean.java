package ftn.master.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data 
@Entity
@Table(name = "radnik_avg_sel_min_res")
public class SelectMinBean {
	
	@Id
	@Column
	private String key; 
	
	@Column
	private Double val; 
	
	public SelectMinBean () {
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
