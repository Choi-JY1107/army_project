package outManegement.backend.domain;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import outManegement.backend.domain.repository.MemberRepository;
import outManegement.backend.domain.repository.MemoryMemberRepository;

import java.util.Optional;

public class RepositoryTest {
    MemberRepository memberRepository;

    @BeforeEach
    void initRepository(){
        memberRepository= new MemoryMemberRepository();
    }

    @Test
    void saveAndFindMember(){
        Account account = new Account();
        System.out.println("RepositoryTest.saveAndFindMember");
        memberRepository.save(account);

        Optional<Account> findAccount = memberRepository.findById(0L);
    }
}
