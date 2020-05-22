package domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import domain.model.User;

@ApplicationScoped
public class UserServiceImpl implements UserService {

	@PersistenceContext(unitName = "UserPU")
	private EntityManager em;

	public UserServiceImpl() {
	}

	public UserServiceImpl(EntityManager em) {
		this();
		this.em = em;
	}

	@Override
	public List<User> getAll() {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<User> criteria = builder.createQuery(User.class);
		criteria.from(User.class);
		return em.createQuery(criteria).getResultList();
	}

	@Override
	public void update(User user) {
		User i = em.find(User.class, user.getUserId());
		if (i == null) {
			throw new IllegalArgumentException("User does not exist : " + user.getUserId());
		}
		em.merge(user);
	}

	@Override
	public User get(Long userId) {
		return em.find(User.class, userId);
	}

	@Override
	public void create(User user) {
		if ( /*user.getId() != null or*/ get(user.getUserId())!=null ) {
			throw new IllegalArgumentException("User already exists : " + user.getUserId());
		}
		em.persist(user);
	}
}
