package domain.service;

import java.util.List;

import domain.model.Recipe;

public interface RecipeService {

	List<Recipe> getAll();

	void update(Recipe recipe);

	long create(Recipe recipe);

	Recipe get(Long recipeId);

	void removeRecipe(Long recipeId);
}