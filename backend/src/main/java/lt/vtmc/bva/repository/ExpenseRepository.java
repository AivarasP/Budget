package lt.vtmc.bva.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtmc.bva.model.Expense;
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
	

}