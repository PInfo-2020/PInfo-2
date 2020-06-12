package api.msg;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.aerogear.kafka.SimpleKafkaProducer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import domain.model.;
import domain.service.RecipeService;

@ExtendWith(MockitoExtension.class)
class RecipeProducerTest {

	@Mock
	private SimpleKafkaProducer<String, > kafkaProducer;
	@Mock
	private RecipeService recipeService;

	@InjectMocks
	private RecipeProducer producer;

	@Test
	void testSendAlls() {
		List<> recipes = getRandomCollection();
		when(recipeService.getAll()).thenReturn(recipes);
		producer.sendAlls();
		verify(kafkaProducer, times(recipes.size())).send(eq("recipes"), any(.class));
	}

	@Test
	void testSend() {
		 recipe = getRandom();
		producer.send(recipe);
		verify(kafkaProducer, times(1)).send("recipes", recipe);
	}

	@Test
	void testSendLong() {
		 recipe = getRandom();
		when(recipeService.get(recipe.getId())).thenReturn(recipe);
		producer.send(recipe.getId());
		verify(kafkaProducer, times(1)).send("recipes", recipe);
	}

	@Test
	void testSendLongNull() {
		 recipe = getRandom();
		when(recipeService.get(recipe.getId())).thenReturn(null);
		producer.send(recipe.getId());
		verify(kafkaProducer, times(0)).send("recipes", recipe);
	}

	private List<> getRandomCollection() {
		List<> recipes = new ArrayList<>();
		long numberOf = Math.round((Math.random() * 1000));
		for (int i = 0; i < numberOf; i++) {
			recipes.add(getRandom());
		}
		return recipes;
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
		b.setQuantity(Long.valueOf(Math.round(Math.random() * 1000)));
		return b;
	}

	
}
