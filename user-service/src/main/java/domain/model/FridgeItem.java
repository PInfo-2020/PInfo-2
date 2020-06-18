package domain.model;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@Entity
@Table(name ="FridgeItem")
public class FridgeItem implements Serializable{

	private static final long serialVersionUID = -58439702578493L;

	@Id
	@SequenceGenerator(name = "FR_ITEM_SEQ", sequenceName = "FR_ITEM_SEQ")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "FR_ITEM_SEQ")
	private Long id;

	@NotNull
	private float quantity;

	@NotNull
	private String unit;

	@NotNull
	private Long ingredient;

	public FridgeItem(){
		this.quantity = 0.0f;
		this.ingredient = new Long(0);
	}

	/*public FridgeItem(float quantity, String unit, Long ingredient){
		this.quantity = quantity;
		this.unit = unit;
		this.ingredient = ingredient;
  }*/

	public FridgeItem(FridgeItem other){
		if (other.id!=null)
			this.id = other.id;
		this.quantity = other.quantity;
		this.unit = other.unit;
		this.ingredient = other.ingredient;
  }

}
