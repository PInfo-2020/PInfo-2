package domain.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import domain.model.Bond;
import domain.model.User;
import eu.drus.jpa.unit.api.JpaUnit;

@ExtendWith(JpaUnit.class)
@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

	@Spy
	@PersistenceContext(unitName = "UserPUTest")
	EntityManager em;

	@InjectMocks
	private UserServiceImpl userService;

	@Test
	void testGetAll() {
		List<User> users = userService.getAll();
		int size = users.size();
		
		userService.create(getRandomUser());
		userService.create(getRandomUser());
		userService.create(getRandomUser());
		userService.create(getRandomUser());
		
		assertEquals(size + 4, userService.getAll().size());
	}

	@Test
	void testUpdate() {
		userService.create(getRandomUser());
		User user = userService.getAll().get(0);
		assertNotNull(user);
		Long id = user.getId();
		user.setOriginalCurrency("XXX");
		userService.update(user);
		user = userService.get(id);
		assertEquals("XXX", user.getOriginalCurrency());
	}

	@Test
	void testUpdateNonExistant() {
		User i = new User() {
			@Override
			public Long getId() {
				return Long.MAX_VALUE;
			}
		};
		assertThrows(IllegalArgumentException.class, () -> {
			userService.update(i);
		});
	}

	@Test
	void testGet() {
		userService.create(getRandomUser());
		User user = userService.getAll().get(0);
		assertNotNull(user);
		Long id = user.getId();
		User getUser = userService.get(id);
		assertEquals(user.getOriginalCurrency(), getUser.getOriginalCurrency());
	}

	@Test
	void testGetNonExistant() {
		List<User> users = userService.getAll();
		System.out.println("testGetNonExistant:" + users.size());

		assertNull(userService.get(Long.MAX_VALUE));
	}

	@Test
	void testCreate() {
		User user = getRandomUser();
		userService.create(user);
		assertNotNull(user.getId());
	}


	@Test
	void testCreateDuplicate() {
		User user = getRandomUser();
		userService.create(user);
		assertThrows(IllegalArgumentException.class, () -> {
			userService.create(user);
		});
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
		b.setQuantity(Long.valueOf(Math.round(Math.random()*1000)));
		return b;
	}
}
