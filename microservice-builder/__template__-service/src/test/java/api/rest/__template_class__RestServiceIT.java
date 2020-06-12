package api.rest;

import static io.restassured.RestAssured.when;
import static org.hamcrest.Matchers.containsString;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;

public class __template_class__RestServiceIT {

	@BeforeAll
	public static void setup() {
		RestAssured.baseURI = "http://localhost:28080/__template_instance__";
		RestAssured.port = 8080;
	}

	@Test
	public void testGetAll() {
		when().get("/").then().body(containsString("254900LAW6SKNVPBBN21"));

	}

	@Test
	public void testGet() {
		when().get("/1").then().body(containsString("254900LAW6SKNVPBBN21"));
	}

}