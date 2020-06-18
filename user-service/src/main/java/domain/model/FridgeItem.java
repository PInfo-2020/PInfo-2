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
public class FridgeItem {

	@Id
	@NotNull
	@GeneratedValue
	private Long id;

	@NotNull
	private float quantity;

	@NotNull
	private Long ingredient;

	public FridgeItem(){
		this.quantity = 0.0f;
		this.ingredient = new Long(0);
	}

	public FridgeItem(float quantity, Long ingredient){
		this.quantity = quantity;
		this.ingredient = ingredient;
  }

  public float getQuantity(){
  	return this.quantity;
  }

  public void setQuantity(float other){
  	this.quantity = other;
  }

  public Long getIngredient(){
  	return this.ingredient;
  }

  public void setIngredient(Long other){
  	this.ingredient = other;
  }




}
