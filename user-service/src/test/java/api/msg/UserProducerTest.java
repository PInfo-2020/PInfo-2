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

import domain.model.User;
import domain.service.UserService;

@ExtendWith(MockitoExtension.class)
class UserProducerTest {

	@Mock
	private SimpleKafkaProducer<String, User> kafkaProducer;
	@Mock
	private UserService userService;

	@InjectMocks
	private UserProducer producer;

	@Test
	void testSendAllUsers() {
		List<User> users = getRandomUserCollection();
		when(userService.getAll()).thenReturn(users);
		producer.sendAllUsers();
		verify(kafkaProducer, times(users.size())).send(eq("users"), any(User.class));
	}

	@Test
	void testSendUser() {
		User user = getRandomUser();
		producer.send(user);
		verify(kafkaProducer, times(1)).send("users", user);
	}

	@Test
	void testSendLong() {
		User user = getRandomUser();
		when(userService.get(user.getUserId())).thenReturn(user);
		producer.send(user.getUserId());
		verify(kafkaProducer, times(1)).send("users", user);
	}

	@Test
	void testSendLongNull() {
		User user = getRandomUser();
		when(userService.get(user.getUserId())).thenReturn(null);
		producer.send(user.getUserId());
		verify(kafkaProducer, times(0)).send("users", user);
	}

	private List<User> getRandomUserCollection() {
		List<User> users = new ArrayList<>();
		long numberOfUser = Math.round((Math.random() * 1000));
		for (int i = 0; i < numberOfUser; i++) {
			users.add(getRandomUser());
		}
		return users;
	}

	private User getRandomUser() {
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
