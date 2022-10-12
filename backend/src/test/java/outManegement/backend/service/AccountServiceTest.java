package outManegement.backend.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import outManegement.backend.dao.Account;
import outManegement.backend.dto.enumcollect.Permission;
import outManegement.backend.dto.enumcollect.Rank;
import outManegement.backend.repository.AccountRepository;

import java.util.Optional;

@SpringBootTest
public class AccountServiceTest {
    @Autowired
    AccountService accountService;
    @Autowired
    AccountRepository accountRepository;

    @BeforeEach
    void init(){
        accountRepository.clearAll();
    }

    @Test
    void 회원가입() {
        Account account = new Account(
                "테스트용", "21", "010-xxxx-xxxx",
                1L, Rank.DIAMOND1, "행보관", Permission.ROOT);

        Long saveId = accountService.join(account);

        System.out.println("saveId = " + saveId);

        Account findAccount = accountService.findById(saveId).get();

        Assertions.assertThat(findAccount.getId()).isSameAs(account.getId());
    }

    @Test
    void 저장된Account체크(){
        Optional<Account> byId = accountRepository.findById(3L);
        System.out.println("byId = " + byId.orElse(null).getId());
    }
}
