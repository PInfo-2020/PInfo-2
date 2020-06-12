package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.SimpleKafkaProducer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;
import org.aerogear.kafka.cdi.annotation.Producer;

import domain.model.__template_class__;
import domain.service.__template_class__Service;
import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class __template_class__Producer {

	@Producer
	private SimpleKafkaProducer<String, __template_class__> producer;

	@Inject
	private __template_class__Service __template_instance__Service;

	public void sendAll__template_class__s() {
		log.info("Send the current state of ALL __template_instance__s to the topic");
		for (__template_class__ __template_instance__ : __template_instance__Service.getAll()) {
			producer.send("__template_instance__", __template_instance__);
		}
	}

	public void send(__template_class__ __template_instance__) {
		log.info("Send the state of an __template_instance__ to the topic with id " + __template_instance__.getId() );
		producer.send("__template_instance__", __template_instance__);
	}

	public void send(Long __template_instance__Id) {
		log.info("Send the state of an __template_instance__ to the topic with id " + __template_instance__Id);
		__template_class__ __template_instance__ = __template_instance__Service.get(__template_instance__Id);
		if (__template_instance__ != null) {
			send(__template_instance__);
		}
	}
}
