package domain.model;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@Entity
public class Recipe {

	@Id
	@NotNull
	@SequenceGenerator(name = "RECIPE_SEQ", sequenceName = "RECIPE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "RECIPE_SEQ")
	private Long id;

	@NotNull
	private String name;

	@NotNull
	private Long authorID;      // userID

	private String image;  // image path

	private String description;  // short description of a recipe

	@NotNull
	private float grade;  //evaluation note

	@NotNull
	private String prepText; //preparation detailed description

	@NotNull
	private int prepTime; //preparation time in minutes

	@NotNull
	private int servings;

	@NotNull
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "Recipe_ID", nullable = true)
	@OrderBy
	private List<RecipeIngredient> recipeIngredients;

/*
	@PrePersist
	void preInsert() {
		if (this.grade == null)
			this.grade = 0.0;
	}*/

}


/*
{
		descriptiontext: "<description générale>",
		grade: "<note repa>",
		image: "<donnée ou url image>",
		ingredientlist: "<une liste d'ingrédent du type [{ingredient},{ingredient},..}>",
		name: "<titre repa>",
		personnumber: "<nombre de personnes>",
		preptext: "<comment préparer>",
		preptime: "<temps de préparation total>"
		}*/
