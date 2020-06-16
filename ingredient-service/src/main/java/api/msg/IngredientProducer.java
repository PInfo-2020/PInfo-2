package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;


import org.aerogear.kafka.SimpleKafkaProducer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;
import org.aerogear.kafka.cdi.annotation.Producer;

import domain.model.Ingredient;
import domain.service.IngredientService;
import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class IngredientProducer {

	@Producer
	private SimpleKafkaProducer<String, Ingredient> producer;

	@Inject
	private IngredientService ingredientService;

	public void sendAllProducts() {
		log.info("Send the current state of ALL products to the topic");
		for (Ingredient ingredient : ingredientService.getAll()) {
			producer.send("products", ingredient);
		}
	}

	public void send(Ingredient ingredient) {
		log.info("Send the state of an ingredient to the topic with name " + ingredient.getProductName() );
		producer.send("ingredient", ingredient);
	}

public void send(String productName) {
		log.info("Send the state of an ingredient to the topic with name " + productName);
		Ingredient ingredient = ingredientService.get(productName);
		if (ingredient != null) {
			send(ingredient);
		}
	}

}
