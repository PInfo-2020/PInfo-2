package api.msg;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.aerogear.kafka.cdi.annotation.Consumer;
import org.aerogear.kafka.cdi.annotation.KafkaConfig;

import lombok.extern.java.Log;

@ApplicationScoped
@KafkaConfig(bootstrapServers = "#{thorntail.kafka-configuration.host}:#{thorntail.kafka-configuration.port}")
@Log
public class __template_class__Consumer {

	@Inject
	private __template_class__Producer producer;

	@Consumer(topics = "__template_instance__sReq", groupId = "pinfo-microservices")
	public void update__template_class__(final String message) {
		log.info("Consumer got following message : " + message);
		if ("all".equals(message)) {
			producer.sendAll__template_class__s();
		} else {
			// interpret the __template_instance__ id
			try {
				Long __template_instance__Id = Long.valueOf(message);
				producer.send(__template_instance__Id);
			} catch(NumberFormatException e) {
				throw new IllegalArgumentException("Message must be wither a numeric __template_instance__ identifier or 'all'");
			}
		}
	}
}
