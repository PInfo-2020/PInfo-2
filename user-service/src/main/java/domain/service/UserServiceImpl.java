package domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import lombok.extern.java.Log;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.transaction.Transactional;

import domain.model.AUser;
import domain.model.FridgeItem;

@ApplicationScoped
@Log
public class UserServiceImpl implements UserService {

	@PersistenceContext(unitName = "AUserPU")
	private EntityManager em;

	/*public UserServiceImpl() {
	}

	public UserServiceImpl(EntityManager em) {
		this();
		this.em = em;
	}*/

	@Override
	public List<AUser> getAll() {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<AUser> criteria = builder.createQuery(AUser.class);
		criteria.from(AUser.class);
		return em.createQuery(criteria).getResultList();
	}

	@Override
	public void update(AUser user) {
		AUser i = em.find(AUser.class, user.getId());
		if (i == null) {
			throw new IllegalArgumentException("AUser does not exist : " + user.getId());
		}
		em.merge(user);
	}

	@Override
	public AUser addFridgeitem( Long userId, FridgeItem fi ) {
		AUser user = this.get(userId);
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		user.addFridgeitem(fi);
		return user;
	}

	@Override
	public AUser removeFridgeitem( Long userId, Long fi_id ) {
		AUser user = this.get(userId);
		FridgeItem fi = em.find(FridgeItem.class, fi_id);
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		if (fi==null) {
			throw new IllegalArgumentException("FridgeItem does not exist : " + fi_id);
		}
		user.removeFridgeitem(fi);
		return user;
	}

	@Override
	public AUser replaceFridgeitem( Long userId, Long fi_id, FridgeItem fi_new ) {
		AUser user = this.get(userId);
		FridgeItem fi = em.find(FridgeItem.class, fi_id);
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		if (fi==null) {
			throw new IllegalArgumentException("FridgeItem does not exist : " + fi_id);
		}
		user.replaceFridgeitem(fi, fi_new);
		return user;
	}

	@Override
	public AUser clearFridge( Long userId ) {
		AUser user = this.get(userId);
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		user.clearFridge();
		return user;
	}

	@Override
	public AUser get(Long userId) {
		return em.find(AUser.class, userId);
	}

	@Override
	@Transactional
	public void create(AUser user) {
		if ( user.getId() != null ) {
			throw new IllegalArgumentException("AUser already exists : " + user.getId());
		}
		em.persist(new AUser(user));

	}
}
