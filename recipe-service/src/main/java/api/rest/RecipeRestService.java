package api.rest;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;

import api.msg.RecipeProducer;
import domain.model.Recipe;
import domain.service.RecipeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;

@ApplicationScoped
@Path("/recipe")
@Api(value = "recipe", authorizations = {
	      @Authorization(value="sampleoauth", scopes = {})
	    })
public class RecipeRestService {

	@Inject
	private RecipeService recipeService;
	@Inject
	private RecipeProducer recipeProducer;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get all the Recipes",
    notes = "Recipes are specialized and thus might contain more fields than the one of the base class.")
	public List<Recipe> getAll() {
		return recipeService.getAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specifc Recipe",
    notes = "Recipes are specialized and thus might contain more fields than the one of the base class.")
	public Recipe get(@PathParam("id") Long recipeId) {
		return recipeService.get(recipeId);
	}


	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Update a given Recipe",
    notes = "Recipes are specialized and thus might contain more fields than the one of the base class.")
	public void upadte(Recipe recipe) {
		recipeService.update(recipe);
		recipeProducer.send(recipe);
	}

	@POST
	@Path("post")
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Create a new Recipe",
    notes = "Recipes are specialized and thus might contain more fields than the one of the base class.")
	public void create(Recipe recipe) {
		System.out.println(recipe);
		recipeService.create(recipe);
		//recipeProducer.send(recipe);
		System.out.println("After");
		System.out.println(recipe);
	}


	@POST
	@Path("propagateAllRecipes")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Propagate all Recipes to the bus to sync up downstream services",
    notes = "Recipes are specialized and thus might contain more fields than the one of the base class.")
	public void propagateAllRecipes() {
		recipeProducer.sendAllRecipes();
	}
}
