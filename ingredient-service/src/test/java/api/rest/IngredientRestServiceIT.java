package api.rest;

import static io.restassured.RestAssured.when;
import static org.hamcrest.Matchers.containsString;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;

public class IngredientRestServiceIT {

	@BeforeAll
	public static void setup() {
		RestAssured.baseURI = "http://localhost:28080/ingredients";
		RestAssured.port = 8080;
	}

	@Test
	public void testGetAll() {
		System.out.println("TEST GET ALL");
		when().get("/").then().body(containsString("Abricot, cru"));

	}


	@Test
	public void testGetById() {
		when().get("/1").then().body(containsString("48"));
	}

	@Test
	public void testGet() {
		when().get("/name/Ail").then().body(containsString("137"));
	}

	@Test
	public void testGetByType() {
		when().get("/type/Viande").then().body(containsString("155"));
	}

}