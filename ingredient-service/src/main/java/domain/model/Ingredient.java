package domain.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity

public class Ingredient {
    @Id
    @SequenceGenerator(name = "INGR_SEQ", sequenceName = "INGR_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "INGR_SEQ")
    private Long id;


    @Column(unique = true)
    @NotNull
    private String productName;

    @NotNull
    private String productType;

    @NotNull
    private Integer calories;

    @NotNull
    private  String units;

}
