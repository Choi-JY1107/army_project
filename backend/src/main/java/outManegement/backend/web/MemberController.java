package outManegement.backend.web;
import org.springframework.web.bind.annotation.*;
import outManegement.backend.domain.Account;
import outManegement.backend.domain.repository.MemberRepository;
import outManegement.backend.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/members")
public class MemberController {
    MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/list")
    public Object allMember(HttpServletRequest request, HttpServletResponse response){
        return memberService.findAll();
    }

    @PostMapping("/new-form")
    public Account saveMember(HttpServletRequest request){
        Account account = new Account();
        memberService.join(account);
        return account;
    }

    @DeleteMapping
    public void deleteById(){

    }
}
