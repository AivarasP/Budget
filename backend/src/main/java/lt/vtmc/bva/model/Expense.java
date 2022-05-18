package lt.vtmc.bva.model;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@Entity
public class Expense {

	@Id
	@GeneratedValue
	private Long id;
	private BigDecimal sum;
	@NotNull
	private LocalDate date;
	private String comment;

	private Expense(BigDecimal sum, LocalDate date, String comment) {
		this.sum = sum;
		this.date = date;
		this.comment = comment;
	}
	
}
