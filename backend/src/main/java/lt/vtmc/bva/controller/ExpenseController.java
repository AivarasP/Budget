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

import lt.vtmc.bva.model.Expense;
import lt.vtmc.bva.repository.ExpenseRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

	@Autowired
	public ExpenseRepository expenseRepo;

	@GetMapping
	public List<Expense> getExpenses() {
		return expenseRepo.findAll();

	}

	@GetMapping("/{id}")
	public Expense getExpense(@PathVariable Long id) {
		return expenseRepo.findById(id).get();
	}

	@PostMapping
	public Expense postExpenses(@RequestBody Expense expense) {
		return expenseRepo.save(expense);
	}

	@DeleteMapping("/{id}")
	public void deleteExpenses(@PathVariable Long id) {
		expenseRepo.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Expense> updateIncomes(@PathVariable Long id, @Valid @RequestBody Expense expenseDetails) {
		Expense expense = expenseRepo.findById(id).orElseThrow() ;
		
		expense.setSum(expenseDetails.getSum());
		expense.setDate(expenseDetails.getDate());
		expense.setComment(expenseDetails.getComment());
		final Expense updatedIncome = expenseRepo.save(expense);
        return ResponseEntity.ok(updatedIncome);
	}
}
