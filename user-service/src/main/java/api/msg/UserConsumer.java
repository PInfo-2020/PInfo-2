package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.cdi.annotation.Consumer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;

import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class UserConsumer {

	@Inject
	private UserProducer producer;

	@Consumer(topics = "usersReq", groupId = "pinfo-microservices")
	public void updateUser(final String message) {
		log.info("Consumer got following message : " + message);
		if ("all".equals(message)) {
			producer.sendAllUsers();
		} else {
			// interpret the user id
			try {
				Long userId = Long.valueOf(message);
				producer.send(userId);
			} catch(NumberFormatException e) {
				throw new IllegalArgumentException("Message must be wither a numeric user identifier or 'all'");
			}
		}
	}
}
