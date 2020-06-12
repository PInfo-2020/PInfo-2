package domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import lombok.extern.java.Log;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.transaction.Transactional;

import domain.model.__template_class__;

@ApplicationScoped
@Log
public class __template_class__ServiceImpl implements __template_class__Service {

	@PersistenceContext(unitName = "__template_class__PU")
	private EntityManager em;

	/*public __template_class__ServiceImpl() {
	}

	public __template_class__ServiceImpl(EntityManager em) {
		this();
		this.em = em;
	}*/

	@Override
	public List<__template_class__> getAll() {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<__template_class__> criteria = builder.createQuery(__template_class__.class);
		criteria.from(__template_class__.class);
		return em.createQuery(criteria).getResultList();
	}

	@Override
	public void update(__template_class__ __template_instance__) {
		__template_class__ i = em.find(__template_class__.class, __template_instance__.getId());
		if (i == null) {
			throw new IllegalArgumentException("__template_class__ does not exist : " + __template_instance__.getId());
		}
		em.merge(__template_instance__);
	}

	@Override
	public __template_class__ get(Long __template_instance__Id) {
		return em.find(__template_class__.class, __template_instance__Id);
	}

	@Override
	@Transactional
	public void create(__template_class__ __template_instance__) {
		/*if ( __template_instance__.getId() != null or get(__template_instance__.getId())!=null ) {
			throw new IllegalArgumentException("__template_class__ already exists : " + __template_instance__.getId());
		}*/
		em.persist(__template_instance__);
		
	}
}
