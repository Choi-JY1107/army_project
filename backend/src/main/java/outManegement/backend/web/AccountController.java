package outManegement.backend.web;
import org.springframework.web.bind.annotation.*;
import outManegement.backend.domain.Account;
import outManegement.backend.service.AccountService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RestController
@RequestMapping("/Accounts")
public class AccountController {
    AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/list")
    public Object allMember(HttpServletRequest request, HttpServletResponse response){
        return accountService.findAll();
    }

    @GetMapping
    public Account findAccountById(@RequestParam Long userId){
        Optional<Account> account = accountService.findById(userId);
        if(account.isPresent()){
            return account.get();
        }
        else{
            throw new IllegalArgumentException("해당하는 userId가 존재하지 않습니다");
        }
    }

    @PostMapping("/new-form")
    public Account saveMember(HttpServletRequest request){
        Account account = new Account();
        accountService.join(account);
        return account;
    }

    @DeleteMapping
    public void deleteById(@RequestParam Long userId){
        Optional<Account> account = accountService.findById(userId);
        if(account.isPresent()){
            accountService.deleteById(userId);
        }
        else{
            throw new IllegalArgumentException("해당하는 userId가 존재하지 않습니다");
        }
    }
}
