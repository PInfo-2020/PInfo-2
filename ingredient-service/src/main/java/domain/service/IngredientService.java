package domain.service;

import java.util.List;

import domain.model.Ingredient;

public interface IngredientService {
	Ingredient get(String productName);
	List<Ingredient> getAll();
	List<Ingredient> getByType(String productType);
	List<Ingredient> searchByName(String name);
	void create(Ingredient product);
	void update(Ingredient product);
}