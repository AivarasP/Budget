package lt.vtmc.bva.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lt.vtmc.bva.model.Income;
import lt.vtmc.bva.repository.IncomeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/incomes")
public class IncomeController {

	@Autowired
	public IncomeRepository incomeRepo;

	@GetMapping
	public List<Income> getIncomes() {
		return incomeRepo.findAll();

	}

	@GetMapping("/{id}")
	public Income getIncome(@PathVariable Long id) {
		return incomeRepo.findById(id).get();
	}

	@PostMapping
	public Income postIncomes(@RequestBody Income income) {
		return incomeRepo.save(income);
	}

	@DeleteMapping("/{id}")
	public void deleteIncomes(@PathVariable Long id) {
		incomeRepo.deleteById(id);
	}
	
//	ResponseEntity
	@PutMapping("/{id}")
	public ResponseEntity<Income> updateIncomes(@PathVariable Long id, @Valid @RequestBody Income incomeDetails) {
		Income income = incomeRepo.findById(id).orElseThrow() ;
		
		income.setSum(incomeDetails.getSum());
		income.setDate(incomeDetails.getDate());
		income.setComment(incomeDetails.getComment());
		final Income updatedIncome = incomeRepo.save(income);
        return ResponseEntity.ok(updatedIncome);
	}
}
