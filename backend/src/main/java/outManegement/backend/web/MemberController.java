package outManegement.backend.web;
import org.springframework.web.bind.annotation.*;
import outManegement.backend.domain.Account;
import outManegement.backend.domain.repository.MemberRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/members")
public class MemberController {
    MemberRepository memberRepository;

    public MemberController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @GetMapping("/list")
    public Object allMember(HttpServletRequest request, HttpServletResponse response){
        return memberRepository.findAllMember();
    }

    @PostMapping("/new-form")
    public Account saveMember(){
        Account account = new Account();
        memberRepository.save(account);
        return account;
    }

    @DeleteMapping
    public void deleteById(){

    }
}
