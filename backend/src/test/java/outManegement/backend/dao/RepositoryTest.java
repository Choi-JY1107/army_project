package outManegement.backend.dao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import outManegement.backend.repository.AccountRepository;
import outManegement.backend.dao.repository.MemoryAccountRepository;

import java.util.Optional;

public class RepositoryTest {
    AccountRepository accountRepository;

    @BeforeEach
    void initRepository(){
        accountRepository = new MemoryAccountRepository();
    }

    @Test
    void saveAndFindMember(){
        Account account = new Account();
        System.out.println("RepositoryTest.saveAndFindMember");
        accountRepository.save(account);

        Optional<Account> findAccount = accountRepository.findById(0L);
    }
}
