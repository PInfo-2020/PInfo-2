package domain.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import domain.model.Ingredient;
import eu.drus.jpa.unit.api.JpaUnit;

@ExtendWith(JpaUnit.class)
@ExtendWith(MockitoExtension.class)
class IngredientServiceImplTest {

	@Spy
	@PersistenceContext(unitName = "IngredientPUTest")
	EntityManager em;

	@InjectMocks
	private IngredientServiceImpl ingredientService;


	@Test
	void testGetAll() {
		int size = initDataStore();
		assertEquals(size, ingredientService.getAll().size());
	}

	private int initDataStore() {
		int size = ingredientService.getAll().size();
		List<Ingredient> ingredients = getIngredients();
		for (Ingredient ing : ingredients) {
			em.persist(ing);
		}
		return size + ingredients.size();
	}


	private List<Ingredient> getIngredients() {

		List<Ingredient> ingredients = new ArrayList<>();
		long numberOfIngr = Math.round((Math.random() * 10)) + 5;
		for (int i = 0; i < numberOfIngr; i++) {
			ingredients.add(getRandomIngredient());
		}
		return ingredients;
	}

	private Ingredient getRandomIngredient() {
		Ingredient ing = new Ingredient();

		ing.setProductName(UUID.randomUUID().toString());
		ing.setProductType(UUID.randomUUID().toString());
		ing.setCalories((int)Math.round((Math.random() * 10)) + 23);
		ing.setUnits(UUID.randomUUID().toString());

		return ing;
	}

}
