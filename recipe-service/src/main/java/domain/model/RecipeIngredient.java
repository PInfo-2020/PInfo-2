package domain.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;


@Data
@Entity
@Table(name ="RecipeIngredient")

public class RecipeIngredient implements Serializable{

    @Id
    @SequenceGenerator(name = "INGRED_SEQ", sequenceName = "INGRED_SEQ")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "INGRED_SEQ")
    private Long id;

    @NotNull
    private String name;

    private String image ;     //image path

    @NotNull
    private int quantity;

    @NotNull
    private float unit;

}


