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
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import lombok.Data;
import domain.model.FridgeItem;

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

	@JsonIgnore
	@OneToMany(
		cascade = CascadeType.ALL,
		orphanRemoval = true
	)
	@JoinColumn(name="user_id")
	private List<FridgeItem> fridgeItems;

	public AUser(){
		this.name  = null;
		this.email = null;
		this.registerDate = null;
		this.ratingNum = 0;
		this.ratingDenum = 0;
		this.fridgeItems = new ArrayList<FridgeItem>();
	}

	public AUser( Long id, String name, String email, Date registerDate, int ratingNum, int ratingDenum, List<FridgeItem> fridgeItems ){
		this.name  = name;
		this.email = email;
		this.registerDate = (registerDate == null) ? new Date() : registerDate;
		this.ratingNum = ratingNum;
		this.ratingDenum = ratingDenum;
		if (fridgeItems != null && !(fridgeItems.isEmpty()) ) {
			this.fridgeItems = fridgeItems;
		} else {
			this.fridgeItems = new ArrayList<FridgeItem>();
		}
	}

	public AUser( AUser usr ){
		this.name  = usr.name;
		this.email = usr.email;
		this.registerDate = new Date();
		this.ratingNum = 0;
		this.ratingDenum = 0;
		this.fridgeItems = new ArrayList<FridgeItem>();
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

	public List<FridgeItem> getFridgeitems(){
		return this.fridgeItems;
	}

	public void addFridgeitem(FridgeItem other){
		this.fridgeItems.add(other);
	}

	public void removeFridgeitem(FridgeItem other){
		this.fridgeItems.remove(other);
	}

	public void replaceFridgeitem(FridgeItem to_replace, FridgeItem other){
		this.fridgeItems.set(this.fridgeItems.indexOf(to_replace), other);
	}

	public void clearFridge(){
		this.fridgeItems.clear();
	}

}
