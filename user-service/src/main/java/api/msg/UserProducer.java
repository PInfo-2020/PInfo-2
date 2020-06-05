package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.SimpleKafkaProducer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;
import org.aerogear.kafka.cdi.annotation.Producer;

import domain.model.AUser;
import domain.service.UserService;
import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class UserProducer {

	@Producer
	private SimpleKafkaProducer<String, AUser> producer;

	@Inject
	private UserService userService;

	public void sendAllAUsers() {
		log.info("Send the current state of ALL users to the topic");
		for (AUser user : userService.getAll()) {
			producer.send("user", user);
		}
	}

	public void send(AUser user) {
		log.info("Send the state of an user to the topic with id " + user.getId() );
		producer.send("user", user);
	}

	public void send(Long userId) {
		log.info("Send the state of an user to the topic with id " + userId);
		AUser user = userService.get(userId);
		if (user != null) {
			send(user);
		}
	}
}
