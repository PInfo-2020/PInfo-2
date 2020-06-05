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

import api.msg.__template_class__Producer;
import domain.model.__template_class__;
import domain.service.__template_class__Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;

@ApplicationScoped
@Path("/__template_instance__")
@Api(value = "__template_instance__", authorizations = {
	      @Authorization(value="sampleoauth", scopes = {})
	    })
public class __template_class__RestService {

	@Inject
	private __template_class__Service __template_instance__Service;
	@Inject
	private __template_class__Producer __template_instance__Producer;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get all the __template_class__s",
    notes = "__template_class__s are specialized and thus might contain more fields than the one of the base class.")
	public List<__template_class__> getAll() {
		return __template_instance__Service.getAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get a specifc __template_class__",
    notes = "__template_class__s are specialized and thus might contain more fields than the one of the base class.")
	public __template_class__ get(@PathParam("id") Long __template_instance__Id) {
		return __template_instance__Service.get(__template_instance__Id);
	}


	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Update a given __template_class__",
    notes = "__template_class__s are specialized and thus might contain more fields than the one of the base class.")
	public void upadte(__template_class__ __template_instance__) {
		__template_instance__Service.update(__template_instance__);
		__template_instance__Producer.send(__template_instance__);
	}

	@POST
	@Path("post")
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Create a new __template_class__",
    notes = "__template_class__s are specialized and thus might contain more fields than the one of the base class.")
	public void create(__template_class__ __template_instance__) {
		System.out.println(__template_instance__);
		__template_instance__Service.create(__template_instance__);
		//__template_instance__Producer.send(__template_instance__);
		System.out.println("After");
		System.out.println(__template_instance__);
	}


	@POST
	@Path("propagateAll__template_class__s")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Propagate all __template_class__s to the bus to sync up downstream services",
    notes = "__template_class__s are specialized and thus might contain more fields than the one of the base class.")
	public void propagateAll__template_class__s() {
		__template_instance__Producer.sendAll__template_class__s();
	}
}
