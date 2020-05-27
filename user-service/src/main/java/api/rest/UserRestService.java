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
import javax.ws.rs.core.MediaType;

import api.msg.UserProducer;
import domain.model.AUser;
import domain.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;

@ApplicationScoped
@Path("/user")
@Api(value = "user", authorizations = {
	      @Authorization(value="sampleoauth", scopes = {})
	    })
public class UserRestService {

	@Inject
	private UserService userService;
	@Inject
	private UserProducer userProducer;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get all the AUsers",
    notes = "AUsers are specialized and thus might contain more fields than the one of the base class.")
	public List<AUser> getAll() {
		return userService.getAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specifc AUser",
    notes = "AUsers are specialized and thus might contain more fields than the one of the base class.")
	public AUser get(@PathParam("id") Long userId) {
		return userService.get(userId);
	}


	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Update a given AUser",
    notes = "AUsers are specialized and thus might contain more fields than the one of the base class.")
	public void upadte(AUser user) {
		userService.update(user);
		userProducer.send(user);
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Create a new AUser",
    notes = "AUsers are specialized and thus might contain more fields than the one of the base class.")
	public void create(AUser user) {
		userService.create(user);
		userProducer.send(user);
	}


	@POST
	@Path("propagateAllAUsers")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Propagate all AUsers to the bus to sync up downstream services",
    notes = "AUsers are specialized and thus might contain more fields than the one of the base class.")
	public void propagateAllAUsers() {
		userProducer.sendAllAUsers();
	}
}
