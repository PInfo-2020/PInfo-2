package domain.service;

import java.util.List;

import domain.model.Ingredient;

public interface IngredientService {

	List<Ingredient> getAll();
	List<Ingredient> getByType(String productType);
	Ingredient get(String productName);
}