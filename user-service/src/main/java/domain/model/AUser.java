package domain.model;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@Entity
//@DiscriminatorColumn(name = "id")
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
// No subclass yet
//@ApiModel(subTypes = {Bond.class, Stock.class, Deposit.class, Loan.class, Warrant.class}, discriminator = "userType")
public class AUser {

	@Id
	@NotNull
	//@Column(name="id", insertable=false, updatable=false)
	@SequenceGenerator(name = "USER_SEQ", sequenceName = "USER_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_SEQ")
	private Long id;

	@NotNull
	private String name;

	@NotNull
	private String email;

	//@NotNull
	//private ArrayList<String> favoriteRecipes; // placeholder, 'Recipe' not ready yet

	@NotNull
	private Date registerDate;

	@NotNull
	private int ratingNum;

	@NotNull
	private int ratingDenum;

	public AUser(){
		this.name  = null;
		this.email = null;
		this.registerDate = null;
		this.ratingNum = 0;
		this.ratingDenum = 0;
	}

	public AUser( Long id, String name, String email, Date registerDate, int ratingNum, int ratingDenum ){
		this.name  = name;
		this.email = email;
		this.registerDate = (registerDate == null) ? new Date() : registerDate;
		this.ratingNum = ratingNum;
		this.ratingDenum = ratingDenum;
	}

	public AUser( AUser usr ){
		this.name  = usr.name;
		this.email = usr.email;
		this.registerDate = new Date();
		this.ratingNum = 0;
		this.ratingDenum = 0;
	}

	public Long getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public String getEmail() {
		return this.email;
	}

}
