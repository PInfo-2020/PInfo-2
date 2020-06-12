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

import domain.model.;
import eu.drus.jpa.unit.api.JpaUnit;

@ExtendWith(JpaUnit.class)
@ExtendWith(MockitoExtension.class)
class __template_class__ServiceImplTest {

	@Spy
	@PersistenceContext(unitName = "PUTest")
	EntityManager em;

	@InjectMocks
	private __template_class__ServiceImpl __template_instance__Service;

	@Test
	void testGetAll() {
		List<> __template_instance__s = __template_instance__Service.getAll();
		int size = __template_instance__s.size();
		
		__template_instance__Service.create(getRandom());
		__template_instance__Service.create(getRandom());
		__template_instance__Service.create(getRandom());
		__template_instance__Service.create(getRandom());
		
		assertEquals(size + 4, __template_instance__Service.getAll().size());
	}

	@Test
	void testUpdate() {
		__template_instance__Service.create(getRandom());
		 __template_instance__ = __template_instance__Service.getAll().get(0);
		assertNotNull(__template_instance__);
		Long id = __template_instance__.getId();
		__template_instance__.setOriginalCurrency("XXX");
		__template_instance__Service.update(__template_instance__);
		__template_instance__ = __template_instance__Service.get(id);
		assertEquals("XXX", __template_instance__.getOriginalCurrency());
	}

	@Test
	void testUpdateNonExistant() {
		 i = new () {
			@Override
			public Long getId() {
				return Long.MAX_VALUE;
			}
		};
		assertThrows(IllegalArgumentException.class, () -> {
			__template_instance__Service.update(i);
		});
	}

	@Test
	void testGet() {
		__template_instance__Service.create(getRandom());
		 __template_instance__ = __template_instance__Service.getAll().get(0);
		assertNotNull(__template_instance__);
		Long id = __template_instance__.getId();
		 get = __template_instance__Service.get(id);
		assertEquals(__template_instance__.getOriginalCurrency(), get.getOriginalCurrency());
	}

	@Test
	void testGetNonExistant() {
		List<> __template_instance__s = __template_instance__Service.getAll();
		System.out.println("testGetNonExistant:" + __template_instance__s.size());

		assertNull(__template_instance__Service.get(Long.MAX_VALUE));
	}

	@Test
	void testCreate() {
		 __template_instance__ = getRandom();
		__template_instance__Service.create(__template_instance__);
		assertNotNull(__template_instance__.getId());
	}


	@Test
	void testCreateDuplicate() {
		 __template_instance__ = getRandom();
		__template_instance__Service.create(__template_instance__);
		assertThrows(IllegalArgumentException.class, () -> {
			__template_instance__Service.create(__template_instance__);
		});
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
		b.setQuantity(Long.valueOf(Math.round(Math.random()*1000)));
		return b;
	}
}
