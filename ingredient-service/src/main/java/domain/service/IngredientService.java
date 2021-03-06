package domain.service;

import java.util.List;

import domain.model.Ingredient;

public interface IngredientService {
	Ingredient get(String productName);
	Ingredient getById(Long Id);
	List<Ingredient> getAll();
	List<Ingredient> getByType(String productType);
	List<Ingredient> searchByName(String name);
	Long create(Ingredient product);
	void update(Ingredient product);
	void removeIngredient(String name);
}