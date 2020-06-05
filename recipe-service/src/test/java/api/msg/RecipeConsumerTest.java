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
class RecipeConsumerTest {

	@Mock
	private RecipeProducer producer;
	
	@InjectMocks
	private RecipeConsumer consumer;
	
	@Test
	void testUpdateRegular() {
		consumer.update("452");
		verify(producer).send(452l);
	}
	
	@Test
	void testUpdateAll() {
		consumer.update("all");
		verify(producer, times(1)).sendAlls();
	}
	
	@Test
	void testUpdateUnexpectedMessage() {
		assertThrows(IllegalArgumentException.class,
				() -> consumer.update("XXX"));
	}

}