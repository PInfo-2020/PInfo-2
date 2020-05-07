package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.SimpleKafkaProducer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;
import org.aerogear.kafka.cdi.annotation.Producer;

import domain.model.User;
import domain.service.UserService;
import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class UserProducer {

	@Producer
	private SimpleKafkaProducer<String, User> producer;

	@Inject
	private UserService userService;

	public void sendAllUsers() {
		log.info("Send the current state of ALL users to the topic");
		for (User user : userService.getAll()) {
			producer.send("user", user);	
		}
	}

	public void send(User user) {
		log.info("Send the state of an user to the topic with id " + user.getId() );
		producer.send("user", user);			
	}

	public void send(Long userId) {
		log.info("Send the state of an user to the topic with id " + userId);
		User user = userService.get(userId);
		if (user != null) {
			send(user);
		}
	}
}
