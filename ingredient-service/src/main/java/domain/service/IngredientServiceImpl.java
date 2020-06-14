package domain.service;

import java.util.List;



import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import domain.model.Ingredient;
import lombok.extern.java.Log;



@ApplicationScoped
@Log
public class IngredientServiceImpl implements IngredientService {

   // Create logger for logging SQL statements with parameters
	private static final Logger logger = LogManager.getLogger(IngredientService.class);


	@PersistenceContext(unitName = "IngredientPU")
	private EntityManager em;

/*	public IngredientServiceImpl() {
		System.setProperty("log4j.properties","./path_to_the_log4j2_config_file/log4j2.xml");
	}*/


	@Override
	public List<Ingredient> getAll() {
		log.info("IngredientServiceImpl retrieve all products(ingredients)");
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		criteria.from(Ingredient.class);
		return em.createQuery( criteria ).getResultList();
	}

	@Override
	public List<Ingredient> getByType(String productType){
		log.info("IngredientServiceImpl retrieve products of requested type");
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		Root<Ingredient> c = criteria.from(Ingredient.class);
		ParameterExpression<String> p = builder.parameter(String.class);
		//log.info("getByType parameter: " + p.toString());
		logger.info("TEST SQL LOGGER");
		criteria.select(c).where(builder.like(builder.lower(c.get("productType")), p));
		return em.createQuery( criteria ).setParameter(p,'%' + productType.toLowerCase() + '%').getResultList();
	}

	@Override
	public List<Ingredient> searchByName(String name){
		log.info("IngredientServiceImpl retrieve products containing parameter 'name' in productName");
		//Query q = em.createQuery()
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		Root<Ingredient> c = criteria.from(Ingredient.class);
		ParameterExpression<String> p = builder.parameter(String.class);
		criteria.select(c).where(builder.like(builder.lower(c.get("productName")), p));
		//criteria.select(c).where(builder.like(c.get("productName"), p));
		return em.createQuery( criteria ).setParameter(p,'%' + name.toLowerCase() + '%').getResultList();

	/*	Predicate lcSurnameLikeSearchPattern = criteriaBuilder.like(
				criteriaBuilder.lower(Person_.surname),
				searchPattern.toLowerCase());
		criteriaQuery.where(lcSurnameLikeSearchPattern);

	 */
	}

	@Override
	public Ingredient getById(Long Id){
		log.info("IngredientServiceImpl get product by ID");
		return em.find(Ingredient.class, Id);
	}

	@Override
	public Ingredient get(String productName) {
		log.info("IngredientServiceImpl get product by name");
		//return em.find(Ingredient.class, productName);

		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Ingredient> criteria = builder.createQuery(Ingredient.class);
		Root<Ingredient> c = criteria.from(Ingredient.class);
		ParameterExpression<String> p = builder.parameter(String.class);
		criteria.select(c).where(builder.equal(c.get("productName"), p));
		try {
			return em.createQuery(criteria).setParameter(p, productName).getSingleResult();
		} catch (NoResultException ex) {
			return null;
		}
	}

	@Override
	@Transactional
	public Long create(Ingredient product) {
		log.info("IngredientServiceImpl create ingredient");
		if (get(product.getProductName()) != null) {
			throw new IllegalArgumentException("Product already exist : " + product.getProductName());
		}
		log.info("Create ingredient before persist. Id value: "  + product.getId());
		em.persist(product);
		log.info("Create ingredient after persist. Id value : " + product.getId());
		return  product.getId();
	}

	@Override
	@Transactional
	public void update(Ingredient product) {
		Ingredient compareElement = get(product.getProductName());
		if  (compareElement == null) {
			throw new IllegalArgumentException("Product does not exist : " + product.getProductName());
		} else {
			if (product.getId() != compareElement.getId()){
				throw new IllegalArgumentException("Duplicate name: " + product.getProductName());
			}
		}
		em.merge(product);
	}
}
