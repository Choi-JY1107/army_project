package outManegement.backend.service;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import outManegement.backend.domain.Account;
import outManegement.backend.domain.Unit;
import outManegement.backend.domain.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Component
@Transactional
public class MemberService {
    MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Long join(Account account){
        //vaildAccountID(account);
        memberRepository.save(account);
        return account.getId();
    }

    private void vaildAccountID(Account account) {
        if(memberRepository.findById(account.getId()).isPresent())
            throw new IllegalStateException("이미 존재하는 회원입니다.");
    }

    public List<Account> findAll(){
        return memberRepository.findAllMember();
    }

    public Optional<Account> findById(Long id){
        return memberRepository.findById(id);
    }

}
