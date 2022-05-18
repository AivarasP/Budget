package lt.vtmc.bva;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lt.vtmc.bva.model.ERole;
import lt.vtmc.bva.model.Role;
import lt.vtmc.bva.repository.RoleRepository;

@Component
public class InitData implements CommandLineRunner {

	@Autowired
	RoleRepository roleRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		if(roleRepo.findByName(ERole.ROLE_USER).isEmpty()) {
		roleRepo.save(new Role(ERole.ROLE_USER));
		}
	}

}
