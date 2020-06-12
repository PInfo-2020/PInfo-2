package domain.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.math.BigDecimal;
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

import domain.model.;
import eu.drus.jpa.unit.api.JpaUnit;

@ExtendWith(JpaUnit.class)
@ExtendWith(MockitoExtension.class)
class RecipeServiceImplTest {

	@Spy
	@PersistenceContext(unitName = "PUTest")
	EntityManager em;

	@InjectMocks
	private RecipeServiceImpl recipeService;

	@Test
	void testGetAll() {
		List<> recipes = recipeService.getAll();
		int size = recipes.size();
		
		recipeService.create(getRandom());
		recipeService.create(getRandom());
		recipeService.create(getRandom());
		recipeService.create(getRandom());
		
		assertEquals(size + 4, recipeService.getAll().size());
	}

	@Test
	void testUpdate() {
		recipeService.create(getRandom());
		 recipe = recipeService.getAll().get(0);
		assertNotNull(recipe);
		Long id = recipe.getId();
		recipe.setOriginalCurrency("XXX");
		recipeService.update(recipe);
		recipe = recipeService.get(id);
		assertEquals("XXX", recipe.getOriginalCurrency());
	}

	@Test
	void testUpdateNonExistant() {
		 i = new () {
			@Override
			public Long getId() {
				return Long.MAX_VALUE;
			}
		};
		assertThrows(IllegalArgumentException.class, () -> {
			recipeService.update(i);
		});
	}

	@Test
	void testGet() {
		recipeService.create(getRandom());
		 recipe = recipeService.getAll().get(0);
		assertNotNull(recipe);
		Long id = recipe.getId();
		 get = recipeService.get(id);
		assertEquals(recipe.getOriginalCurrency(), get.getOriginalCurrency());
	}

	@Test
	void testGetNonExistant() {
		List<> recipes = recipeService.getAll();
		System.out.println("testGetNonExistant:" + recipes.size());

		assertNull(recipeService.get(Long.MAX_VALUE));
	}

	@Test
	void testCreate() {
		 recipe = getRandom();
		recipeService.create(recipe);
		assertNotNull(recipe.getId());
	}


	@Test
	void testCreateDuplicate() {
		 recipe = getRandom();
		recipeService.create(recipe);
		assertThrows(IllegalArgumentException.class, () -> {
			recipeService.create(recipe);
		});
	}

	private  getRandom() {
		Bond b = new Bond();
		b.setBrokerLei(UUID.randomUUID().toString());
		b.setCounterpartyLei(UUID.randomUUID().toString());
		b.setAmountInOriginalCurrency(new BigDecimal("0.0"));
		b.setOriginalCurrency("USD");
		b.setValueDate(new Date());
		b.setMaturityDate(new Date());
		b.setIsin(UUID.randomUUID().toString());
		b.setQuantity(Long.valueOf(Math.round(Math.random()*1000)));
		return b;
	}
}
