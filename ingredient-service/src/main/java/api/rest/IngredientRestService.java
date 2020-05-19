package api;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
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
		return ingredientService.getAll();
	}

	@GET
	@Path("{type}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "retrieve all products of requested type")
	public List<Ingredient> getByType(@PathParam("type") String productType) {
		return ingredientService.getByType(productType);
	}


	@GET
	@Path("{name}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specific product using its name")
	public Ingredient get(@PathParam("name") String productName) {
		return ingredientService.get(productName);
	}

}