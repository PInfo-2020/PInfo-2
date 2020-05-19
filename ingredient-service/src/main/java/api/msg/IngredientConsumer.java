package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.cdi.annotation.Consumer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;

import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class IngredientConsumer {

	@Inject
	private IngredientProducer producer;

	@Consumer(topics = "ingredientsReq", groupId = "pinfo-microservices")
	public void updateIngredient(final String message) {
		log.info("Consumer got following message : " + message);
		if ("all".equals(message)) {
			producer.sendAllProducts();
		} else {
			// interpret the product name
			try {
				String productName = String.valueOf(message);
				producer.send(productName);
			} catch(NumberFormatException e) {
				throw new IllegalArgumentException("Message must be wither a product name or 'all'");
			}
		}
	}
}
