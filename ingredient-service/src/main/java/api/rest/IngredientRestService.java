package api.rest;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import domain.model.Ingredient;
import domain.service.IngredientService;
import io.swagger.annotations.ApiOperation;

@ApplicationScoped
@Path("/ingredients")
public class IngredientRestService {

	@Inject
	private IngredientService ingredientService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "retrieve all products (possible ingredients)")
	public List<Ingredient> getAll() {
		System.out.println("coucou from GetAll");
		return ingredientService.getAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specific product using its ID")
	public Ingredient getById(@PathParam("id") Long id) {

		return ingredientService.getById(id);
	}

	@GET
	@Path("/name/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specific product using its name")
	public Ingredient get(@PathParam("name") String productName) {

		return ingredientService.get(productName);
	}

	@GET
	@Path("/search/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "retrieve all products containing requested name")
	public List<Ingredient> searchByName(@PathParam("name") String productType) {
		return ingredientService.searchByName(productType);
	}

	@GET
	@Path("/type/{type}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "retrieve all products containing requested type")
	public List<Ingredient> getByType(@PathParam("type") String productType) {
		return ingredientService.getByType(productType);
	}


	@POST
	@Consumes(MediaType.APPLICATION_JSON)  //charset=UTF-8
	@ApiOperation(value = "Create a new product reference ")
	public Long create(Ingredient ingr) {
		//System.out.println(ingr);
		return ingredientService.create(ingr);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)  //charset=UTF-8
	@ApiOperation(value = "update a product")
	public void update(Ingredient product) {
		ingredientService.update(product);
	}

}