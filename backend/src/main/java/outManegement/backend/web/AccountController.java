package outManegement.backend.web;
import org.springframework.web.bind.annotation.*;
import outManegement.backend.dao.Account;
import outManegement.backend.dto.enumcollect.Permission;
import outManegement.backend.dto.enumcollect.Rank;
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

    @PostMapping("/create")
    public Account saveMember(@RequestParam String name,
                              @RequestParam String srvno,
                              @RequestParam String telno,
                              @RequestParam Long unitId,
                              @RequestParam String rank,
                              @RequestParam String position,
                              @RequestParam int level
                              ){
        Account account = new Account(name,srvno,telno,unitId, Rank.DIAMOND1,position, Permission.ROOT);
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
