package api.msg;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class UserConsumerTest {

	@Mock
	private UserProducer producer;
	
	@InjectMocks
	private UserConsumer consumer;
	
	@Test
	void testUpdateRegularAUser() {
		consumer.updateAUser("452");
		verify(producer).send(452l);
	}
	
	@Test
	void testUpdateAllAUser() {
		consumer.updateAUser("all");
		verify(producer, times(1)).sendAllAUsers();
	}
	
	@Test
	void testUpdateUnexpectedMessage() {
		assertThrows(IllegalArgumentException.class,
				() -> consumer.updateAUser("XXX"));
	}

}
