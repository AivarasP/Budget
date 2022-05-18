package lt.vtmc.bva.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.vtmc.bva.model.ERole;
import lt.vtmc.bva.model.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
Optional<Role> findByName(ERole name);
}
