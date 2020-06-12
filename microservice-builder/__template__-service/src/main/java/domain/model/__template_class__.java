package domain.model;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@Entity
public class __template_class__ {

	@Id
	@NotNull
	@SequenceGenerator(name = "__template_class_UC___SEQ", sequenceName = "__template_class_UC___SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "__template_class_UC___SEQ")
	private Long id;

	@NotNull
	private String name;

}
