package domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Root;

import domain.model.Ingredient;
import lombok.extern.java.Log;

@ApplicationScoped
@Log
public class IngredientServiceImpl implements IngredientService {

	@PersistenceContext(unitName = "IngredientPU")
	private EntityManager em;

	@Override
	public List<Ingredient> getAll() {
		log.info("retrieve all products(ingredients)");
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		criteria.from(Ingredient.class);
		return em.createQuery( criteria ).getResultList();
	}

	@Override
	public List<Ingredient> getByType(String productType){
		log.info("retrieve products of requested type");
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		Root<Ingredient> c = criteria.from(Ingredient.class);
		ParameterExpression<String> p = builder.parameter(String.class);
		criteria.select(c).where(builder.like(c.get("productType"), p));
		return em.createQuery( criteria ).setParameter(p,productType).getResultList();
	}


	@Override
	public Ingredient get(String productName) {
		return em.find(Ingredient.class, productName);
	}


}
