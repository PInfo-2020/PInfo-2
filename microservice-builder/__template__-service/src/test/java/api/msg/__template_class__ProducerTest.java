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
import domain.service.__template_class__Service;

@ExtendWith(MockitoExtension.class)
class __template_class__ProducerTest {

	@Mock
	private SimpleKafkaProducer<String, > kafkaProducer;
	@Mock
	private __template_class__Service __template_instance__Service;

	@InjectMocks
	private __template_class__Producer producer;

	@Test
	void testSendAlls() {
		List<> __template_instance__s = getRandomCollection();
		when(__template_instance__Service.getAll()).thenReturn(__template_instance__s);
		producer.sendAlls();
		verify(kafkaProducer, times(__template_instance__s.size())).send(eq("__template_instance__s"), any(.class));
	}

	@Test
	void testSend() {
		 __template_instance__ = getRandom();
		producer.send(__template_instance__);
		verify(kafkaProducer, times(1)).send("__template_instance__s", __template_instance__);
	}

	@Test
	void testSendLong() {
		 __template_instance__ = getRandom();
		when(__template_instance__Service.get(__template_instance__.getId())).thenReturn(__template_instance__);
		producer.send(__template_instance__.getId());
		verify(kafkaProducer, times(1)).send("__template_instance__s", __template_instance__);
	}

	@Test
	void testSendLongNull() {
		 __template_instance__ = getRandom();
		when(__template_instance__Service.get(__template_instance__.getId())).thenReturn(null);
		producer.send(__template_instance__.getId());
		verify(kafkaProducer, times(0)).send("__template_instance__s", __template_instance__);
	}

	private List<> getRandomCollection() {
		List<> __template_instance__s = new ArrayList<>();
		long numberOf = Math.round((Math.random() * 1000));
		for (int i = 0; i < numberOf; i++) {
			__template_instance__s.add(getRandom());
		}
		return __template_instance__s;
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
