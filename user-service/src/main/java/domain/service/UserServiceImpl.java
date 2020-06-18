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
	@Transactional
	public void addFridgeitem( Long userId, Long fi_id ) {
		AUser user = this.get(userId);
		FridgeItem fi = this.getFridgeItem( fi_id );
		if (user==null)
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		if (fi==null)
			throw new IllegalArgumentException("FridgeItem does not exist : " + fi_id);

		user.addFridgeitem(fi);
		em.merge(user);
		em.merge(fi);
	}

	@Override
	@Transactional
	public void removeFridgeitem( Long userId, Long fi_id ) {
		AUser user = this.get(userId);
		FridgeItem fi = this.getFridgeItem( fi_id );
		if (user==null)
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		if (fi==null)
			throw new IllegalArgumentException("FridgeItem does not exist : " + fi_id);

		user.removeFridgeitem(fi);
		em.remove(fi);
		em.merge(user);
	}

	@Override
	@Transactional
	public void replaceFridgeitem( Long userId, Long fi_id, Long fi_new_id ) {
		AUser user = this.get(userId);
		FridgeItem fi = this.getFridgeItem( fi_id );
		FridgeItem fi_new = this.getFridgeItem( fi_new_id );
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		if (fi == null || fi_new == null) {
			throw new IllegalArgumentException("FridgeItem does not exist : " + fi_id);
		}
		user.replaceFridgeitem(fi, fi_new);
		em.remove(fi);
		em.merge(user);
	}

	@Override
	@Transactional
	public void clearFridge( Long userId ) {
		AUser user = this.get(userId);
		if (user==null) {
			throw new IllegalArgumentException("AUser does not exist : " + userId);
		}
		user.clearFridge();
		em.merge(user);
	}

	@Override
	public AUser get(Long userId) {
		return em.find(AUser.class, userId);
	}

	@Override
	public FridgeItem getFridgeItem(Long fi_id) {
		return em.find(FridgeItem.class, fi_id);
	}

	@Override
	@Transactional
	public void create(AUser user) {
		if ( user.getId() != null ) {
			throw new IllegalArgumentException("AUser already exists : " + user.getId());
		}
		em.persist(new AUser(user));

	}

	@Override
	@Transactional
	public Long createFridgeItem(FridgeItem fi) {
		if ( fi.getId() != null ) {
			throw new IllegalArgumentException("FridgeItem already exists : " + fi.getId());
		}
		FridgeItem fi_persist = new FridgeItem(fi);
		em.persist(fi_persist);
		return fi_persist.getId();
	}
}
