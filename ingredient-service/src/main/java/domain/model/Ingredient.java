package domain.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity

public class Ingredient {
    @Id
    private String productName;
    @NotNull
    private String productType;
    @NotNull
    private Integer calories;
    @NotNull
    private  String units;

}
