package lt.vtmc.bva.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtmc.bva.model.Income;

public interface IncomeRepository extends JpaRepository<Income, Long> {
	

}
