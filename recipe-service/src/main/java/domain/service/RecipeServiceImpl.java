package domain.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import lombok.extern.java.Log;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.transaction.Transactional;

import domain.model.Recipe;

@ApplicationScoped
@Log
public class RecipeServiceImpl implements RecipeService {

	@PersistenceContext(unitName = "RecipePU")
	private EntityManager em;

	/*public RecipeServiceImpl() {
	}

	public RecipeServiceImpl(EntityManager em) {
		this();
		this.em = em;
	}*/

	@Override
	public List<Recipe> getAll() {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Recipe> criteria = builder.createQuery(Recipe.class);
		criteria.from(Recipe.class);
		return em.createQuery(criteria).getResultList();
	}

	@Override
	public void update(Recipe recipe) {
		Recipe i = em.find(Recipe.class, recipe.getId());
		if (i == null) {
			throw new IllegalArgumentException("Recipe does not exist : " + recipe.getId());
		}
		em.merge(recipe);
	}

	@Override
	public Recipe get(Long recipeId) {
		return em.find(Recipe.class, recipeId);
	}

	@Override
	@Transactional
	public void create(Recipe recipe) {
		/*if ( recipe.getId() != null or get(recipe.getId())!=null ) {
			throw new IllegalArgumentException("Recipe already exists : " + recipe.getId());
		}*/
		em.persist(recipe);
		
	}
}
