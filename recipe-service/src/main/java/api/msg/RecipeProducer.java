package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.SimpleKafkaProducer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;
import org.aerogear.kafka.cdi.annotation.Producer;

import domain.model.Recipe;
import domain.service.RecipeService;
import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class RecipeProducer {

	@Producer
	private SimpleKafkaProducer<String, Recipe> producer;

	@Inject
	private RecipeService recipeService;

	public void sendAllRecipes() {
		log.info("Send the current state of ALL recipes to the topic");
		for (Recipe recipe : recipeService.getAll()) {
			producer.send("recipe", recipe);
		}
	}

	public void send(Recipe recipe) {
		log.info("Send the state of an recipe to the topic with id " + recipe.getId() );
		producer.send("recipe", recipe);
	}

	public void send(Long recipeId) {
		log.info("Send the state of an recipe to the topic with id " + recipeId);
		Recipe recipe = recipeService.get(recipeId);
		if (recipe != null) {
			send(recipe);
		}
	}
}
