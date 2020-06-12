package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.cdi.annotation.Consumer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;

import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class RecipeConsumer {

	@Inject
	private RecipeProducer producer;

	@Consumer(topics = "recipesReq", groupId = "pinfo-microservices")
	public void updateRecipe(final String message) {
		log.info("Consumer got following message : " + message);
		if ("all".equals(message)) {
			producer.sendAllRecipes();
		} else {
			// interpret the recipe id
			try {
				Long recipeId = Long.valueOf(message);
				producer.send(recipeId);
			} catch(NumberFormatException e) {
				throw new IllegalArgumentException("Message must be wither a numeric recipe identifier or 'all'");
			}
		}
	}
}
