package outManegement.backend.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import outManegement.backend.domain.Account;
import outManegement.backend.domain.enumcollect.Permission;
import outManegement.backend.domain.enumcollect.Rank;
import outManegement.backend.domain.repository.MemberRepository;

import java.util.Optional;

@SpringBootTest
public class MemberServiceTest {
    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    @BeforeEach
    void init(){
        memberRepository.clearAll();
    }

    @Test
    void 회원가입() {
        Account account = new Account(
                "테스트용", "21", "010-xxxx-xxxx",
                1L, Rank.DIAMOND1, "행보관", Permission.ROOT);

        Long saveId = memberService.join(account);

        System.out.println("saveId = " + saveId);

        Account findAccount = memberRepository.findById(saveId).get();

        Assertions.assertThat(findAccount.getId()).isSameAs(account.getId());
    }

    @Test
    void 저장된Account체크(){
        Optional<Account> byId = memberRepository.findById(3L);
        System.out.println("byId = " + byId.orElse(null).getId());
    }
}
